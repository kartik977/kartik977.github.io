#!/usr/bin/env python3
"""Official exam change candidates. A change alert never claims an eligibility or date change."""
import json, re, hashlib, io, urllib.request
from pathlib import Path
from datetime import datetime,timezone
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from pypdf import PdfReader

ROOT=Path(__file__).resolve().parents[1]
TRIGGER=re.compile(r'corrigendum|amendment|addendum|postpon|reschedul|revis|extend|extension|change in (?:exam|date|schedule|vacanc)',re.I)
EXAM={'SSC CGL':r'\bCGL\b','SSC CHSL':r'\bCHSL\b','RRB NTPC':r'\bNTPC\b','RRB Group D':r'group d|level[- ]1','IBPS PO':r'CRP[- /]?PO|probationary officer','UPSC CSE':r'civil services','CAT':r'common admission test','SBI PO':r'\bSBI PO\b'}
DOCS=[
 {'id':'ssc-cgl-2026','title':'SSC CGL 2026 official notice','agency':'ssc','url':'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf','examTags':['SSC CGL']},
 {'id':'ibps-calendar-2026','title':'IBPS official tentative calendar 2026–27','agency':'ibps','url':'https://www.ibps.in/wp-content/uploads/IBPS_CALENDAR_2026-27_final.pdf','examTags':['IBPS PO']},
 {'id':'upsc-cse-2026','title':'UPSC Civil Services 2026 examination page','agency':'upsc','url':'https://www.upsc.gov.in/examinations/Civil%20Services%20%28Preliminary%29%20Examination%2C%202026','examTags':['UPSC CSE']}
]
TRUSTED={'ssc.gov.in','ibps.in','www.ibps.in','www.upsc.gov.in','upsc.gov.in'}
def load(file,fallback):
 p=ROOT/file
 try:return json.loads(p.read_text()) if p.exists() else fallback
 except (OSError,ValueError):return fallback
def valid(url):
 p=urlparse(url)
 return p.scheme=='https' and p.hostname in TRUSTED and not p.username and not p.password
def tags(title):return [k for k,pat in EXAM.items() if re.search(pat,title,re.I)]
def text_of(blob,url):
 if blob[:4]==b'%PDF' or url.split('?')[0].lower().endswith('.pdf'):
  pdf=PdfReader(io.BytesIO(blob),strict=False)
  if len(pdf.pages)>150:raise ValueError('oversized PDF page count')
  return ' '.join(x.extract_text() or '' for x in pdf.pages)[:220000]
 soup=BeautifulSoup(blob,'html.parser')
 for el in soup(['script','style','nav','footer']):el.decompose()
 return soup.get_text(' ',strip=True)[:220000]
def read(url):
 if not valid(url):raise ValueError('not allowlisted')
 with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'ExamAtlas notice version checker'}),timeout=14) as resp:
  if not valid(resp.geturl()):raise ValueError('redirected outside allowlist')
  blob=resp.read(4_000_001)
 if not 150<=len(blob)<=4_000_000:raise ValueError('size not supported')
 raw=' '.join(text_of(blob,url).split())
 if len(raw)<90:raise ValueError('insufficient text for comparison')
 return hashlib.sha256(raw.encode('utf-8')).hexdigest()
def scan(feed,previous,snapshots,reader=read,now=None):
 now=now or datetime.now(timezone.utc).isoformat(timespec='seconds').replace('+00:00','Z')
 events={e['id']:e for e in previous.get('events',[]) if e.get('id')}
 for n in feed.get('items',[]):
  title=n.get('title','');url=n.get('url','')
  if not TRIGGER.search(title) or re.search('deputation basis|tender|procurement',title,re.I):continue
  if not url.startswith('https://'):continue
  ident='link-'+hashlib.sha256((n.get('agency','')+'|'+url).encode()).hexdigest()[:20]
  found={'id':ident,'type':'related-notice','title':title,'agency':n.get('agency',''),'url':url,'firstSeenAt':n.get('firstSeenAt'),'lastSeenAt':n.get('lastSeenAt'),'examTags':tags(title),'status':'needs-review','summary':'Possible correction or revised notice. Specific change not independently verified.'}
  if ident in events:found['firstSeenAt']=events[ident].get('firstSeenAt') or found['firstSeenAt']
  events[ident]=found
 docs=snapshots.get('documents',{});monitors=[]
 for entry in DOCS:
  mon={**entry,'status':'unavailable','checkedAt':now,'message':'Automated read unavailable; open official source'}
  prior=docs.get(entry['id'],{})
  try:
   digest=reader(entry['url'])
   mon.update(status='reading',message='Document text checked; first successful read establishes baseline',lastSuccessfulAt=now)
   if prior.get('sha') and prior['sha']!=digest:
    ident='doc-'+hashlib.sha256((entry['id']+'|'+digest).encode()).hexdigest()[:20]
    events.setdefault(ident,{'id':ident,'type':'document-text-change','title':entry['title']+' — text changed','agency':entry['agency'],'url':entry['url'],'firstSeenAt':now,'examTags':entry['examTags'],'status':'needs-review','summary':'Text at the same official URL changed. What it means for dates, syllabus or eligibility is NOT verified.'})
   docs[entry['id']]={'sha':digest,'lastSuccessfulAt':now}
  except Exception:mon['lastSuccessfulAt']=prior.get('lastSuccessfulAt')
  monitors.append(mon)
 output={'schemaVersion':1,'generatedAt':now,'about':'Candidate notices and text changes require human review before any date or rule is updated','events':sorted(events.values(),key=lambda n:n.get('firstSeenAt') or '',reverse=True)[:180],'monitors':monitors,'reviewed':previous.get('reviewed',[]),'sourceCoverage':feed.get('sources',[])}
 return {'schemaVersion':1,'documents':docs},output
if __name__=='__main__':
 feed=load('notices.json',{'items':[],'sources':[]});prev=load('notice-intelligence.json',{'events':[],'reviewed':[]});snap=load('notice-snapshots.json',{'documents':{}})
 snap,out=scan(feed,prev,snap)
 (ROOT/'notice-snapshots.json').write_text(json.dumps(snap,indent=2,ensure_ascii=False)+'\n')
 (ROOT/'notice-intelligence.json').write_text(json.dumps(out,indent=2,ensure_ascii=False)+'\n')
 print('Notice Intelligence:',len(out['events']),'review-needed candidates,',len(out['monitors']),'source checks')
