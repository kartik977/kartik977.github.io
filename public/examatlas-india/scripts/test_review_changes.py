
import unittest
import review_changes as v
T={'id':'sample-case-unique','eventId':'link-123','status':'verified','agency':'ssc','title':'Test fixture only','examTags':['SSC CGL'],'field':'exam-date','before':'2026-01-01','after':'2026-01-02','explanation':'Test fixture','impact':'Test fixture','originalUrl':'https://ssc.gov.in/','revisedUrl':'https://ssc.gov.in/','verifiedAt':'2026-10-21','reviewedBy':'editor','referenceNumber':'fixture'}
class ReviewTests(unittest.TestCase):
 def test_empty(self):self.assertEqual(v.validate({'schemaVersion':1,'records':[]}),[])
 def test_valid_fixture(self):self.assertEqual(v.validate({'schemaVersion':1,'records':[T]}),[])
 def test_draft_rejected(self):self.assertTrue(v.validate({'schemaVersion':1,'records':[{**T,'status':'draft-unverified'}]}))
 def test_malicious_link_rejected(self):self.assertTrue(v.validate({'schemaVersion':1,'records':[{**T,'revisedUrl':'https://ssc.gov.in.evil.example/'}]}))
 def test_unofficial_link_rejected(self):self.assertFalse(v.official('https://unofficial.example/'))
 def test_equal_values_rejected(self):self.assertTrue(v.validate({'schemaVersion':1,'records':[{**T,'after':T['before']}]}))
