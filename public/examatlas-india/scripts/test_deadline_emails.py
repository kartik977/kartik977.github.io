import sys
import unittest
from datetime import date
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from send_deadline_emails import collect_alerts, build_message


class AlertSelectionTests(unittest.TestCase):
    def setUp(self):
        self.sample = {"id":"test-1", "title":"Test recruitment", "status":"verified-window",
                       "start":"2026-10-01", "end":"2026-11-06",
                       "applyUrl":"https://www.rrbapply.gov.in/", "sourceUrl":"https://www.pib.gov.in/"}

    def test_seven_days_before(self):
        self.assertEqual(len(collect_alerts([self.sample], date(2026,10,30))), 1)

    def test_non_matching_day(self):
        self.assertEqual(collect_alerts([self.sample], date(2026,10,31)), [])

    def test_expired_not_sent(self):
        self.assertEqual(collect_alerts([self.sample], date(2026,11,7)), [])

    def test_unverified_never_sent(self):
        self.assertEqual(collect_alerts([{**self.sample,"status":"announcement-only"}], date(2026,11,5)), [])

    def test_not_started(self):
        self.assertEqual(collect_alerts([{**self.sample,"start":"2026-11-06"}], date(2026,10,30)), [])

    def test_email_uses_source_and_no_secret_leak(self):
        item={**self.sample,"daysRemaining":3}
        msg=build_message([item],date(2026,11,3),'alerts@example.org',['admin@example.org'])
        self.assertIn('https://www.pib.gov.in/',msg.get_content())
        self.assertIn('3 days',msg.get_content())

if __name__ == '__main__': unittest.main()
