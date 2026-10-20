import sys
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from sync_notices import SOURCES, candidate_title, extract_notices, safe_url

class NoticeParserTests(unittest.TestCase):
    def test_source_links_are_restricted(self):
        base = 'https://www.nta.ac.in/'
        self.assertIsNone(safe_url('javascript:alert(1)', base))
        self.assertIsNone(safe_url('https://exam-nta.nic.in.evil.com/apply', base))
        self.assertIsNone(safe_url('http://www.nta.ac.in/', base))
        self.assertEqual(safe_url('/Notice/abc', base), 'https://www.nta.ac.in/Notice/abc')

    def test_nta_read_more_cards(self):
        html = '<div class="latest"><div class="notice"><span>Inviting Online Applications for the National Institute of Fashion Technology Entrance Examination (NIFTEE) 2027</span><a href="/Download/Notice/abcdef">Read More</a></div></div>'
        rows = extract_notices(html, SOURCES[4])
        self.assertEqual(len(rows), 1)
        self.assertTrue(rows[0]['title'].startswith('Inviting Online Applications'))
        self.assertEqual(rows[0]['url'], 'https://www.nta.ac.in/Download/Notice/abcdef')

    def test_upsc_headline_and_dedup(self):
        html = '<ul><li><a href="/notice/cse-27">Civil Services Examination 2027 - Detailed notification published</a></li><li><a href="/notice/cse-27">Civil Services Examination 2027 - Detailed notification published</a></li><li><a href="/about">About us</a></li></ul>'
        rows = extract_notices(html, SOURCES[0]); self.assertEqual(len(rows), 1)

    def test_avoid_offsite_and_vague_headings(self):
        html = '<a href="https://phishing.example/apply">SSC Recruitment Examination 2027 Now Open</a><a href="/notice/1">Read More</a><a href="/">Notification</a>'
        self.assertEqual(extract_notices(html, SOURCES[1]), [])

if __name__ == '__main__':unittest.main()
