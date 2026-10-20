#!/usr/bin/env python3
"""Best-effort official notice feed. Never infers registration dates from scraped text.

Requires beautifulsoup4. No API keys, browser sessions or third-party aggregators.
"""
from __future__ import annotations
import hashlib
import json
import os
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
    dict(id='upsc', name='UPSC', category='Civil services', url='https://www.upsc.gov.in/', host='upsc.gov.in'),
    dict(id='ssc', name='SSC', category='Central recruitment', url='https://ssc.gov.in/', host='ssc.gov.in'),
    dict(id='ibps', name='IBPS', category='Banking', url='https://www.ibps.in/', host='ibps.in'),
    dict(id='rrb', name='RRB Chandigarh', category='Railways', url='https://www.rrbcdg.gov.in/', host='rrbcdg.gov.in'),
    dict(id='nta', name='NTA', category='National entrance', url='https://www.nta.ac.in/', host='nta.ac.in'),
    dict(id='sbi', name='SBI Careers', category='Banking', url='https://sbi.co.in/web/careers/current-openings', host='sbi.co.in'),
]

WORDS = re.compile(r'(?i)\b(notification|notice|recruitment|advertisement|recruiting|application|applications|exam(?:ination)?|revised|result|answer\s*key|admit\s*card|vacanc(?:y|ies)|calendar|corrigendum|shortlist|registration|call\s*letter|employment|preliminary|mains|selection|cbt|niftee|neet|cuet|ugc.?net|upsc|ssc|cen\s*\d|crp.?\w+)\b')
DISALLOW = re.compile(r'(?i)^(?:read more|click here|view all|more|news|latest news|latest updates|notice board|what.s new|application link|home|about us|download|english version|hindi version|open pdf|know more|current openings|latest|apply now|result|notifications|examination notifications)$')
SAFE_HOSTS = (
    'upsc.gov.in', 'ssc.gov.in', 'ibps.in', 'rrbcdg.gov.in', 'nta.ac.in',
    'sbi.co.in', 'bank.sbi', 'gov.in', 'nic.in', 's3waas.gov.in', 'rrbapply.gov.in',
)


def safe_url(raw: str, base: str) -> str | None:
    if not raw or raw.lower().startswith(('javascript:', 'mailto:', 'tel:', '#', 'data:')):
        return None
    url = urllib.parse.urljoin(base, raw.strip())
    parsed = urllib.parse.urlsplit(url)
    if parsed.scheme != 'https' or not parsed.hostname or parsed.username or parsed.password:
        return None
    host = parsed.hostname.lower()
    if not any(host == h or host.endswith('.' + h) for h in SAFE_HOSTS):
        return None
    return urllib.parse.urlunsplit((parsed.scheme, parsed.netloc, parsed.path, parsed.query, ''))


def clean(text: str) -> str:
    return re.sub(r'\s+', ' ', text or '').strip(' -:|.\u00a0')[:240]


def candidate_title(anchor) -> str:
    raw = clean(anchor.get_text(' ', strip=True))
    if len(raw) >= 34 and not DISALLOW.fullmatch(raw):
        return raw
    # NTA has notice text beside a generic "Read More" anchor. On board sites
    # dates and titles often live in the same table cell or card as the link.
    for parent in list(anchor.parents)[:4]:
        if getattr(parent, 'name', '') not in {'li', 'td', 'tr', 'div', 'p', 'article'}:
            continue
        links = parent.find_all('a')
        if len(links) > 4:
            continue
        title = clean(parent.get_text(' ', strip=True))
        title = re.sub(r'(?i)(?:\s+read more|\s+click here|\s+english version|\s+hindi version|\s+view pdf)\s*$', '', title).strip()
        if 34 <= len(title) <= 220 and not DISALLOW.fullmatch(title):
            return title
    return raw


def extract_notices(html: str, source: dict) -> list[dict]:
    soup = BeautifulSoup(html, 'html.parser')
    for tag in soup(['script', 'style', 'noscript', 'footer', 'nav', 'header']):
        tag.decompose()
    out = []
    seen = set()
    for anchor in soup.find_all('a', href=True):
        url = safe_url(anchor.get('href', ''), source['url'])
        if not url or url == source['url']:
            continue
        title = candidate_title(anchor)
        if not (34 <= len(title) <= 220) or not WORDS.search(title) or DISALLOW.fullmatch(title):
            continue
        # Prefer real notice documents/pages; avoid sitewide navigation items.
        if title.lower().startswith(('latest updates', 'visit official', 'important links')):
            continue
        # Large repeated generic site links can otherwise crowd the feed.
        normalized = re.sub(r'\s+', ' ', title.lower())
        if (normalized, url) in seen:
            continue
        seen.add((normalized, url))
        key = hashlib.sha256((source['id'] + '|' + url + '|' + normalized).encode('utf-8')).hexdigest()[:18]
        out.append(dict(id=key, agency=source['id'], title=title, url=url))
    return out[:18]


def fetch(source: dict) -> str:
    req = urllib.request.Request(source['url'], headers={
        'User-Agent': 'ExamAtlasIndiaNoticeWatcher/1.0 (+https://kartik977.github.io/examatlas-india/; links-only)',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-IN,en;q=0.8',
    })
    with urllib.request.urlopen(req, timeout=18) as response:
        if not ('html' in response.headers.get('Content-Type', '').lower()):
            raise ValueError('Source did not return HTML')
        # Limit memory from unexpectedly huge pages.
        data = response.read(2_000_000)
        return data.decode('utf-8', errors='replace')


def run() -> dict:
    previous = {}
    if OUTPUT.exists():
        try:
            previous = json.loads(OUTPUT.read_text(encoding='utf-8'))
        except (ValueError, OSError):
            previous = {}
    old_items = {item['id']: item for item in previous.get('items', []) if isinstance(item, dict) and item.get('id')}
    old_sources = {item['id']: item for item in previous.get('sources', []) if isinstance(item, dict) and item.get('id')}
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace('+00:00', 'Z')
    cutoff = (datetime.now(timezone.utc) - timedelta(days=120)).isoformat()
    items = dict(old_items)
    statuses = []
    seen_ids = set()
    succeeded = 0
    for s in SOURCES:
        last = old_sources.get(s['id'], {})
        row = dict(id=s['id'], name=s['name'], category=s['category'], url=s['url'], status='unavailable', checkedAt=now, lastSuccessfulAt=last.get('lastSuccessfulAt'), count=0)
        try:
            html = fetch(s)
            entries = extract_notices(html, s)
            if len(entries) == 0:
                row['status'] = 'limited'
                row['message'] = 'No individual notices could be safely identified. Visit the official source.'
            else:
                row['status'] = 'ok'
                row['lastSuccessfulAt'] = now
                row['count'] = len(entries)
                succeeded += 1
                for item in entries:
                    seen_ids.add(item['id'])
                    old = old_items.get(item['id']) or {}
                    item['firstSeenAt'] = old.get('firstSeenAt', now)
                    item['lastSeenAt'] = now
                    items[item['id']] = item
        except (OSError, ValueError, urllib.error.URLError) as ex:
            row['message'] = 'Site is unavailable or blocks automated checks; use its official link.'
            print(f"{s['id']}: {type(ex).__name__}: {str(ex)[:100]}", file=sys.stderr)
        statuses.append(row)
    # Do not erase prior notices on a temporary network/parse failure.
    recent = [x for x in items.values() if x.get('lastSeenAt', x.get('firstSeenAt', '')) >= cutoff]
    recent.sort(key=lambda x: (x.get('firstSeenAt', ''), x['id']), reverse=True)
    result = {
        'schemaVersion': 1,
        'generatedAt': now,
        'about': 'Best-effort discovery of links on official agency pages. First seen is not the publication date. Exam dates and registration windows are not inferred.',
        'sources': statuses,
        'items': recent[:140],
    }
    OUTPUT.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(f"ExamAtlas notices: {len(recent)} retained, {len(seen_ids)} detected, {succeeded}/{len(SOURCES)} official sources parsed")
    return result


if __name__ == '__main__':
    run()
