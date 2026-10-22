import unittest
from unittest.mock import patch
import notice_intelligence as n

class NoticeIntelligenceTests(unittest.TestCase):
    def test_reject_external_document_hosts(self):
        self.assertTrue(n.valid("https://ssc.gov.in/api/notice.pdf"))
        self.assertFalse(n.valid("https://ssc.gov.in.example.com/notice.pdf"))
        self.assertFalse(n.valid("http://ssc.gov.in/notice.pdf"))
    def test_first_document_read_establishes_baseline(self):
        snap,out=n.scan({"items":[],"sources":[]},{"events":[]},{"documents":{}},reader=lambda _: "first-hash",now="2026-10-22T12:00:00Z")
        self.assertEqual(snap["documents"]["ssc-cgl-2026"]["sha"],"first-hash")
        self.assertEqual([e for e in out["events"] if e["type"]=="document-text-change"],[])
    def test_second_changed_hash_flags_review_only(self):
        old={"documents":{item["id"]:{"sha":"first-hash","lastSuccessfulAt":"2026-10-21"} for item in n.DOCS}}
        snap,out=n.scan({"items":[],"sources":[]},{"events":[]},old,reader=lambda _:"second-hash",now="2026-10-22T12:00:00Z")
        self.assertEqual(len(out["events"]),len(n.DOCS))
        self.assertTrue(all(e["status"]=="needs-review" for e in out["events"]))
        self.assertTrue(all("NOT verified" in e["summary"] for e in out["events"]))
    def test_failed_source_keeps_previous_hash(self):
        old={"documents":{"ssc-cgl-2026":{"sha":"known-hash","lastSuccessfulAt":"before"}}}
        def fail(_):raise OSError("blocked")
        snap,out=n.scan({"items":[],"sources":[]},{"events":[]},old,reader=fail,now="2026-10-22T12:00:00Z")
        self.assertEqual(snap["documents"]["ssc-cgl-2026"]["sha"],"known-hash")
        self.assertEqual(out["monitors"][0]["status"],"unavailable")
    def test_discovered_corrigendum_is_candidate(self):
        feed={"items":[{"id":"abc","title":"Corrigendum to SSC CGL notification","agency":"ssc","url":"https://ssc.gov.in/notice.pdf","firstSeenAt":"2026-10-21"}]}
        _,out=n.scan(feed,{"events":[]},{"documents":{}},reader=lambda _:"baseline",now="2026-10-22T12:00:00Z")
        cand=[e for e in out["events"] if e["type"]=="related-notice"]
        self.assertEqual(len(cand),1)
        self.assertEqual(cand[0]["status"],"needs-review")

if __name__=="__main__":unittest.main()
