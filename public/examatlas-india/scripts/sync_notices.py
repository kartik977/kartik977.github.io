#!/usr/bin/env python3
"""Conservative discovery of official exam notices and recruitment announcements.

A link is NOT evidence that registration is open. Exam dates continue to require
separate editorial verification before updating data.js.
"""
from __future__ import annotations
import hashlib
import json
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'notices.json'
SOURCES = [
    dict(id='upsc', name='UPSC', category='Civil services', scope='national', url='https://www.upsc.gov.in/', pages=['https://www.upsc.gov.in/exams-related-info/exam-notification/archives']),
    dict(id='ssc', name='SSC', category='Central recruitment', scope='national', url='https://ssc.gov.in/', pages=[]),
    dict(id='ibps', name='IBPS', category='Banking', scope='national', url='https://www.ibps.in/', pages=['https://www.ibps.in/index.php/crp-updates/']),
    dict(id='rrb', name='RRB Chandigarh', category='Railways', scope='national', url='https://www.rrbcdg.gov.in/', pages=[]),
    dict(id='nta', name='NTA', category='National entrance', scope='national', url='https://www.nta.ac.in/', pages=[]),
    dict(id='sbi', name='SBI Careers', category='Banking', scope='national', url='https://sbi.co.in/web/careers/current-openings', pages=[]),
    dict(id='uppsc', name='UPPSC', category='State civil services', scope='state', state='Uttar Pradesh', url='https://uppsc.up.nic.in/', pages=[]),
    dict(id='bpsc', name='BPSC', category='State civil services', scope='state', state='Bihar', url='https://bpsc.bihar.gov.in/', pages=[]),
    dict(id='mpsc', name='MPSC', category='State civil services', scope='state', state='Maharashtra', url='https://mpsc.gov.in/', pages=[]),
    dict(id='rpsc', name='RPSC', category='State civil services', scope='state', state='Rajasthan', url='https://rpsc.rajasthan.gov.in/', pages=[]),
]

SAFE_HOSTS = ('upsc.gov.in', 'ssc.gov.in', 'ibps.in', 'rrbcdg.gov.in', 'nta.ac.in',
              'sbi.co.in', 'bank.sbi', 'gov.in', 'nic.in', 's3waas.gov.in', 'rrbapply.gov.in')

SPECIFIC = re.compile(r'(?i)\b(exam(?:ination)?s?|notification|notice|recruitment|vacanc(?:y|ies)|advertisement|application|registration|admit\s*card|result|answer\s*key|corrigendum|prelim(?:inary)?|mains|call\s*letter|selected|merit\s*list|revised|schedule|timetable|calendar|combined\s*competitive|civil\s*service|\bCEN\b|\bCRP\b|\bNET\b|\bCBT\b|\bRAS\b|\bCCE\b)\b')
JUNK = re.compile(r'(?i)(cookies?|privacy|disclaimer|tender|procurement|eoi|translation\s*reviewers|advertising\s*agency|media\s*briefing|trade\s*mark|annual\s*report|telephone\s*directory|archives?|site\s*map|visitor\s*counter|public\s*grievance|contact\s*us|judgment|court\s*order|publication\s*policy|copyright|fraudulent\s*websites|appointment\s*of\s*consultant)')
VAGUE = re.compile(r'(?i)^(?:click\s*here|read\s*more|view\s*all|more|news|latest\s*news|notices?|recruitment|results?|important\s*notice|current\s*openings|download\s*advertisements?|download|english|hindi|register|apply\s*now|home|pdf|view|apply\s*online)(?:\s*\([^)]*\))?$')
APPLY = re.compile(r'(?i)(inviting\s*(?:online\s*)?applications?|applications?\s*(?:invited|open|commenc|for)|registration\s*(?:open|commenc|start)|recruitment\s*(?:for|of|to)|vacanc(?:y|ies)|new\s*advertisement|direct\s*recruitment|window\s*notification|\badvt\.?\s*(?:no\.?|\d))')
OUTCOMES = re.compile(r'(?i)(results?|scorecards?|cut[ -]?off|answer\s*key|admit\s*card|hall\s*ticket|merit\s*list|shortlist|selection\s*list|certificate|marks|response\s*sheet)')
UPDATES = re.compile(r'(?i)(reschedul|postpon|revis|date(?:s)?\s*of\s*exam|schedule|city\s*intimation|change\s*in|corrigendum|extension\s*of|calendar|exam(?:ination)?s?)')


def safe_url(raw: str, base: str) -> str | None:
    if not raw or raw.strip().lower().startswith(('javascript:', 'mailto:', 'tel:', '#', 'data:')):
        return None
    url = urllib.parse.urljoin(base, raw.strip())
    parsed = urllib.parse.urlsplit(url)
    if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password:
        return None
    host = parsed.hostname.lower()
    if not any(host == h or host.endswith('.' + h) for h in SAFE_HOSTS):
        return None
    return urllib.parse.urlunsplit((parsed.scheme, parsed.netloc.lower(), parsed.path, parsed.query, ''))


def clean(text: str) -> str:
    return re.sub(r'\s+', ' ', text or '').strip(' -:|.\u00a0')[:245]


def is_useful(title: str) -> bool:
    title = clean(title)
    if not (24 <= len(title) <= 220) or VAGUE.fullmatch(title) or JUNK.search(title):
        return False
    if re.match(r'(?i)^(?:download\s*advertisement|view\s*notification)\b', title):
        return False
    return bool(SPECIFIC.search(title) and (len(title.split()) >= 4))


def candidate_title(anchor) -> str:
    raw = clean(anchor.get_text(' ', strip=True))
    if is_useful(raw):
        return raw
    # Some official boards put the text near a generic "Read more" PDF link.
    for parent in list(anchor.parents)[:4]:
        if getattr(parent, 'name', '') not in {'li', 'td', 'tr', 'div', 'p', 'article'}:
            continue
        if len(parent.find_all('a')) > 3:
            continue
        title = clean(parent.get_text(' ', strip=True))
        title = re.sub(r'(?i)(?:\s+read more|\s+click here|\s+view pdf|\s+download(?:\s+pdf)?|\s+english|\s+hindi)\s*$', '', title).strip()
        if is_useful(title):
            return title
    return raw


def kind_for(title: str) -> str:
    if OUTCOMES.search(title):
        return 'result'
    if APPLY.search(title):
        return 'application'
    if UPDATES.search(title):
        return 'update'
    return 'update'


def extract_notices(html: str, source: dict, base_url: str | None = None) -> list[dict]:
    base = base_url or source['url']
    soup = BeautifulSoup(html, 'html.parser')
    for tag in soup(['script', 'style', 'noscript', 'footer', 'nav', 'header']):
        tag.decompose()
    out, seen = [], set()
    for anchor in soup.find_all('a', href=True):
        url = safe_url(anchor.get('href', ''), base)
        if not url or url.rstrip('/') == source['url'].rstrip('/'):
            continue
        title = candidate_title(anchor)
        if not is_useful(title):
            continue
        key = (url, re.sub(r'\s+', ' ', title.lower()))
        if key in seen:
            continue
        seen.add(key)
        # Stable document identity even when the headline is slightly edited.
        unique = hashlib.sha256((source['id'] + '|' + url).encode('utf-8')).hexdigest()[:18]
        out.append(dict(id=unique, agency=source['id'], scope=source['scope'], state=source.get('state'),
                        kind=kind_for(title), title=title, url=url))
    return out[:24]


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (compatible; ExamAtlasIndia/2.0; +https://kartik977.github.io/examatlas-india/)',
        'Accept': 'text/html,application/xhtml+xml', 'Accept-Language': 'en-IN,en;q=0.9',
    })
    with urllib.request.urlopen(req, timeout=13) as response:
        final = response.geturl()
        if not safe_url(final, url):
            raise ValueError('Redirected outside approved official domains')
        if 'html' not in response.headers.get('Content-Type', '').lower():
            raise ValueError('Official page did not return HTML')
        return response.read(1_500_000).decode('utf-8', errors='replace')


def run() -> dict:
    try:
        previous = json.loads(OUTPUT.read_text(encoding='utf-8'))
    except (ValueError, OSError):
        previous = {}
    old_items = {x['id']: x for x in previous.get('items', []) if isinstance(x, dict) and x.get('id')}
    # Bridge the v1 hash (which included headline) to the v2 stable URL hash.
    old_by_url = {(x.get('agency'), x.get('url')): x for x in old_items.values()}
    old_sources = {x['id']: x for x in previous.get('sources', []) if isinstance(x, dict) and x.get('id')}
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')
    cutoff = (datetime.now(timezone.utc) - timedelta(days=80)).isoformat()
    items = {}
    for x in old_items.values():
        if is_useful(x.get('title', '')) and safe_url(x.get('url', ''), 'https://www.upsc.gov.in/') and x.get('lastSeenAt', x.get('firstSeenAt', '')) >= cutoff:
            x['kind'] = kind_for(x['title'])
            x['scope'] = next((s['scope'] for s in SOURCES if s['id'] == x.get('agency')), 'national')
            x['state'] = next((s.get('state') for s in SOURCES if s['id'] == x.get('agency')), None)
            items[x['id']] = x
    statuses = []
    for s in SOURCES:
        last = old_sources.get(s['id'], {})
        found = {}
        fetched = 0
        messages = []
        for target in [s['url'], *s.get('pages', [])]:
            try:
                rows = extract_notices(fetch(target), s, target)
                fetched += 1
                for entry in rows:
                    if entry['id'] not in found:
                        found[entry['id']] = entry
            except (OSError, ValueError, urllib.error.URLError) as exc:
                messages.append(type(exc).__name__)
                print(f"{s['id']} {target}: {type(exc).__name__}: {str(exc)[:90]}", file=sys.stderr)
        status = 'ok' if found else ('limited' if fetched else 'unavailable')
        row = dict(id=s['id'], name=s['name'], category=s['category'], scope=s['scope'], state=s.get('state'), url=s['url'],
                   status=status, checkedAt=now, lastSuccessfulAt=(now if found else last.get('lastSuccessfulAt')),
                   count=len(found), pagesChecked=fetched, pagesConfigured=1+len(s.get('pages', [])))
        if status == 'limited':
            row['message'] = 'Page loaded, but no individual exam notices could be extracted.'
        elif status == 'unavailable':
            row['message'] = 'Official pages blocked automated access or did not load.'
        elif messages:
            row['message'] = 'Partial coverage: some configured pages could not be read.'
        for entry in found.values():
            old = items.get(entry['id']) or old_by_url.get((entry['agency'], entry['url'])) or {}
            entry['firstSeenAt'] = old.get('firstSeenAt', now)
            entry['lastSeenAt'] = now
            items[entry['id']] = entry
            # Avoid retaining an obsolete v1 ID for the same URL.
            if old.get('id') and old['id'] != entry['id']:
                items.pop(old['id'], None)
        statuses.append(row)
    entries = list(items.values())
    entries.sort(key=lambda x: (x.get('lastSeenAt', ''), x.get('firstSeenAt', '')), reverse=True)
    result = {
        'schemaVersion': 2, 'generatedAt': now,
        'about': 'Links discovered on official examination bodies. Detection time is not publication time. A notice is not proof that registration is open. Exam dates are separately checked.',
        'sources': statuses, 'items': entries[:180],
    }
    OUTPUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f"ExamAtlas: {len(result['items'])} notices retained; {sum(s['count'] for s in statuses)} seen; {sum(s['status']=='ok' for s in statuses)}/{len(statuses)} sources yielded links")
    return result


if __name__ == '__main__':
    run()