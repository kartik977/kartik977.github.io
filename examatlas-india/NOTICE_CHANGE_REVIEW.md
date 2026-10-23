# V10: Review protocol

The Notice Intelligence page has a **Reviewed changes** tab. Initially it is empty: no official before/after comparison is approved yet. Existing candidate notices still display source links and clear unverified warnings.

A proposed correction may be filed through the GitHub issue template. A repository editor must independently read BOTH the original authority notice and the updated official notice, checking the relevant exam, advertisement number, pages, exact before/after values, affected categories or posts, and any uncertainty.

After source review, an editor may add one JSON record under `public/examatlas-india/reviewed-changes.json` with these fields: `id, eventId, status:"verified", agency, title, examTags, field, before, after, explanation, impact, originalUrl, revisedUrl, verifiedAt, reviewedBy, referenceNumber`. IDs must be stable and unique, `eventId` ties back to a detected candidate when possible, and both URLs must be official HTTPS sources. Keep wording brief; do not copy full PDFs or infer eligibility. Review and merge through GitHub, not via the public website.

Run `python public/examatlas-india/scripts/review_changes.py` and `python -m unittest discover -s public/examatlas-india/scripts -p 'test_*.py'`. GitHub workflows validate the curated register before deployment. This checks shape and source domains, NOT that the contents are true; human source verification remains necessary.

Website visitors never gain approval rights, the browser does not hold credentials, and nothing automatically alters exam dates or registration links.

