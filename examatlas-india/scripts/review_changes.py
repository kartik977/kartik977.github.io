
#!/usr/bin/env python3
"""Gate the public, manually approved ExamAtlas review register. Does not validate facts."""
import json,sys,re
from datetime import date
from pathlib import Path
from urllib.parse import urlparse
HOSTS={'upsc.gov.in','www.upsc.gov.in','ssc.gov.in','www.ssc.gov.in','ibps.in','www.ibps.in','rrbcdg.gov.in','www.rrbcdg.gov.in','uppsc.up.nic.in','bpsc.bihar.gov.in','mpsc.gov.in','rpsc.rajasthan.gov.in','nta.ac.in','www.nta.ac.in','sbi.co.in','www.sbi.co.in','iimcat.ac.in','www.iimcat.ac.in'}
FIELDS={'application-deadline','exam-date','eligibility','vacancy','syllabus','other'}
EXAMS={'SSC CGL','SSC CHSL','RRB NTPC','RRB Group D','IBPS PO','SBI PO','UPSC CSE','CAT'}
NEEDED={'id','eventId','status','agency','title','examTags','field','before','after','explanation','impact','originalUrl','revisedUrl','verifiedAt','reviewedBy','referenceNumber'}
def official(url):
 if not isinstance(url,str):return False
 try:
  x=urlparse(url)
  return x.scheme=='https' and x.hostname in HOSTS and not x.username and not x.password
 except (TypeError,ValueError):return False
def validate(data):
 if not isinstance(data,dict) or data.get('schemaVersion')!=1 or not isinstance(data.get('records'),list):
  return ['Invalid schemaVersion or records array']
 errors=[];seen=set()
 for i,item in enumerate(data['records']):
  if not isinstance(item,dict):errors.append(f'Record {i}: must be an object');continue
  if NEEDED-set(item):errors.append(f'Record {i}: missing fields '+','.join(sorted(NEEDED-set(item))))
  for k in NEEDED-{'examTags'}:
   if not isinstance(item.get(k),str) or not item.get(k,'').strip() or len(item.get(k,''))>1200:errors.append(f'Record {i}: invalid {k}')
  if item.get('status')!='verified':errors.append(f'Record {i}: approval missing')
  if item.get('field') not in FIELDS:errors.append(f'Record {i}: unrecognized field')
  tags=item.get('examTags')
  if not isinstance(tags,list) or not tags or any(t not in EXAMS for t in tags):errors.append(f'Record {i}: unsupported exam tags')
  for k in ('originalUrl','revisedUrl'):
   if not official(item.get(k)):errors.append(f'Record {i}: invalid official {k}')
  if item.get('before')==item.get('after'):errors.append(f'Record {i}: before and after are identical')
  id=item.get('id')
  if not isinstance(id,str) or not re.fullmatch(r'[a-z0-9][a-z0-9-]{4,90}',id):errors.append(f'Record {i}: invalid id')
  if id in seen:errors.append(f'Record {i}: duplicate id')
  seen.add(id)
  try:
   if date.fromisoformat(item.get('verifiedAt',''))>date.today():errors.append(f'Record {i}: future date')
  except (TypeError,ValueError):errors.append(f'Record {i}: invalid date')
 return errors
def main():
 p=Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parents[1]/'reviewed-changes.json'
 data=json.loads(p.read_text(encoding='utf-8'));errors=validate(data)
 if errors:
  for e in errors:print('ERROR',e)
  raise SystemExit(1)
 print('Approved review register validated:',len(data['records']),'records. Factual accuracy requires independent human document review.')
if __name__=='__main__':main()
