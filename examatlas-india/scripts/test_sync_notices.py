import sys
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from sync_notices import SOURCES, extract_notices, safe_url, kind_for, is_useful


class NoticeParserTests(unittest.TestCase):
    def test_domains_and_schemes(self):
        base='https://www.nta.ac.in/'
        for invalid in ('javascript:alert(1)', 'https://nta.ac.in.evil.example/notice', 'http://nta.ac.in/notices', 'https://bad.test'):
            self.assertIsNone(safe_url(invalid, base))
        self.assertEqual(safe_url('/Download/Notice/abc', base), 'https://www.nta.ac.in/Download/Notice/abc')

    def test_nta_generic_anchor_resolved_from_card(self):
        html='<div><span>Inviting Online Applications for the National Institute of Fashion Technology Entrance Examination 2027</span><a href="/Download/Notice/abc">Read More</a></div>'
        items=extract_notices(html,SOURCES[4]);self.assertEqual(len(items),1)
        self.assertEqual(items[0]['kind'],'application')

    def test_prefer_specific_notice_and_dedup(self):
        html='<ul><li><a href="/notice/1">Civil Services Examination 2027 - Detailed notification published</a></li><li><a href="/notice/1">Civil Services Examination 2027 - Detailed notification published</a></li></ul>'
        self.assertEqual(len(extract_notices(html,SOURCES[0])),1)

    def test_discard_generic_and_irrelevant(self):
        html='<div><a href="/a">DOWNLOAD ADVERTISEMENT English (890 KB) (NEW)</a></div><div><a href="/b">Appointment of consultant for the Translation Reviewers team</a></div><div><a href="/c">Recruitment</a></div>'
        self.assertEqual(extract_notices(html,SOURCES[5]),[])

    def test_states_and_kinds(self):
        s=next(x for x in SOURCES if x['id']=='bpsc')
        self.assertEqual(len([x for x in SOURCES if x['scope']=='state']),4)
        title='Corrigendum: 72nd Combined Competitive Examination vacancies revised'
        notices=extract_notices(f'<a href="/2026/notice-1.pdf">{title}</a>',s)
        self.assertEqual(notices[0]['state'],'Bihar')
        self.assertEqual(notices[0]['kind'],'application')
        self.assertEqual(kind_for('Result Status of Online Preliminary Examination CRP PO XVI'),'result')
        self.assertEqual(kind_for('Rescheduled Preliminary Examination 2027: Important Notice'),'update')
        self.assertTrue(is_useful('UPPSC Combined State Services Examination 2027 — Notification'))
        self.assertEqual(kind_for('LIST OF PROVISIONALLY SELECTED CANDIDATES IN ADVT. NO. A-5/2025, ASSISTANT TEACHER'),'result')
        self.assertEqual(kind_for('NOTICE REGARDING DISTRICT INFORMATION SLIP FOR ADVT. NO. D-6/E-1/2025'),'update')
        self.assertEqual(kind_for('NOTICE REGARDING ADVT. NO. A-7/E-1/2021, TECHNICAL EDUCATION'),'update')


if __name__=='__main__': unittest.main()
