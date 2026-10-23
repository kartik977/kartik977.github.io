# ExamAtlas India

A responsive static dashboard for central / all-India competitive examinations. This starter intentionally separates government job recruitment from national entrance/eligibility exams.

## Run locally

Open `index.html` in a browser, or serve this folder using `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Publish

This static site works on GitHub Pages, Netlify, Cloudflare Pages, or any static web host. Push these files to a repository and enable Pages for the root directory (or upload this folder to your preferred host).

## Features

- Exam explorer, search, filters, sort and grid/list view
- Automatically computed registration states in **Indian Standard Time**
- Important deadlines, official source documents, scheduled date ranges and transparent confidence labels
- Month calendar, browser-persisted bookmarks and downloadable ICS calendar reminders
- Responsive design, keyboard-accessible controls and event details

## Data update policy

`data.js` is an **editorially verified static snapshot**, checked on **19 October 2026**. It does not automatically scrape government websites and **is not a live application status API**. Exact exam and registration dates should only be populated from the relevant institution's own timetable or notification. `null` means not yet announced or not shown by the available calendar; never substitute an estimate without explicitly labeling it as tentative. `registrationStart` and `registrationEnd` store confirmed/officially calendared dates; `lateRegistrationEnd` allows the app to show a separate late-fee state. Sources and last checked date are displayed to visitors. If a date changes, update it and the verified date.

Registration URLs are entry points on official organisers' sites, **not always the direct form**; when an application has not started or has closed, the site labels them accordingly. A future API ingestion pipeline should support manual approval of candidate updates rather than treating scraped rumors as confirmed.

## Add exams / state coverage

Append new objects to `window.EXAM_DATA` in `data.js`, keeping `id` unique. For state-level rollout, add `scope: 'state'`, `state: 'Maharashtra'`, etc. and a new state selector in `app.js`; existing records are all nationwide.

## Disclaimers

Independent informational project; not affiliated with UPSC, SSC, IBPS, NTA, IIMs or other organising bodies. Check original notifications for eligibility, changes to dates, fees and active application links.

## Hosting without build tools

1. Unzip this archive into a new repository, keeping `index.html`, `styles.css`, `data.js`, `app.js`, and `favicon.svg` in the repository root.
2. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, `main` / `(root)`, then **Save**.
3. Wait for GitHub Pages to publish. Share the Pages URL; no API keys or server are needed.

**Maintenance:** Re-check official notices frequently. The dashboard status badges update based on the current Indian date, but the underlying dates and links do not update until `data.js` is edited and republished.

## Phase 02 — official notice tracker (2026-10-20)

`Official notices` is a new UI page. Six official sources are monitored: UPSC, SSC, IBPS, Railway Recruitment Board Chandigarh, NTA and SBI Careers. Each entry contains the agency, headline, original agency link, and **first-detected date** (not the notice's publication date). The website clearly displays scan health per source and never suggests a blocked site is current.

### Automated updater

- `scripts/sync_notices.py` fetches the official agencies, extracts candidate links, screens out other domains, records `firstSeenAt` and `lastSeenAt`, and retains past entries when a source is temporarily unavailable. Uses `beautifulsoup4` in GitHub Actions; no credentials or proprietary APIs.
- `.github/workflows/examatlas-notices.yml` belongs in **the repository-wide `.github/workflows/`**, not inside the published static site folder. GitHub Actions refreshes `notices.json` twice a day, at 02:25 and 14:25 UTC, and supports manual runs. It triggers once at first publication of the workflow/script.
- The watcher rebuilds the hosting portfolio and redeploys `gh-pages` after updating the JSON. This is needed because pushes made with a GitHub workflow token do not trigger other workflows.
- It intentionally does **not** overwrite the manually verified dates or registration links in `data.js`. Those need individual validation against PDFs and subsequent approval.
- Sources can be inaccessible, block bots, render data in JavaScript, or change HTML. The `sources[].status` value reflects whether individual notices could be extracted. Do not label this as complete real-time national exam coverage.

### Local development

`python -m pip install beautifulsoup4`
`python -m unittest discover -s scripts -p "test_*.py"`
`python scripts/sync_notices.py` (requires public internet access)

Deploy the source files in this directory under `public/examatlas-india/` and the watcher workflow at repository root `.github/workflows/examatlas-notices.yml`.


## Phase 03 — useful notices and first state commissions (2026-10-20)

- A dedicated **State exams** page (`#states`) introduces Uttar Pradesh/UPPSC, Bihar/BPSC, Maharashtra/MPSC and Rajasthan/RPSC. The initial cards contain recurring exam families and original commission homepages, *not* automatically inferred open registrations.
- **Official notices** (`#notices`) supports nationwide vs state vs all sources, board search, and tabs for *Applications & recruitment*, *Exam updates*, and *Results & admit cards*. This classification is keyword-based and denotes document topics, never confirmation that registration is currently open.
- `scripts/sync_notices.py` now scans ten official commissions with additional official deep pages for UPSC and IBPS, suppresses generic navigation/download labels, classifies results conservatively, and migrates older link identifiers to stable URL identifiers without resetting the original first-detected timestamp.
- Sources without usable parsed links clearly indicate 'Needs review' or 'Source unavailable'. A successful scan is not a guarantee of complete coverage.
- The scheduled workflow remains twice daily; the public feed is materialized as `notices.json` in the Pages build.
- **State-specific exam dates, direct registration forms, exact vacancies and verified application windows are NOT yet automated.** Add these to the editorial catalog only after verifying an official exam PDF.

To verify: `python -m unittest discover -s scripts -p 'test_*.py'` and `node --check app.js`.

## Phase 04 — state exam dates & personal milestones (2026-10-21)

The main navigation now includes **My deadline planner** (`#planner`), with eight editorial state records in `state-data.js` across Uttar Pradesh, Bihar, Maharashtra and Rajasthan.

- **Source confidence**: `published` reflects an original official exam notice; `tentative` and `proposed` are authority-published planning dates, not guaranteed examination dates. `needs-review` and `unannounced` explicitly show no guessed dates.
- **Applications**: there are **no verified open state application windows** in this release. Official agency/application portal links are *landing pages* unless a cycle-specific form has been established. Never label one as a currently open form without independent verification.
- **Eligibility**: cards have high-level, post-dependent guidance only. The PDF/advertisement controls eligibility and language, reservation, age, degree and fees.
- **My tracker**: candidates can save exams, enter their **own** study/application milestones and notes, filter to tracked exams, and download ICS calendars for the exam date or their personal date. A personal date is NEVER displayed as an official registration deadline. Data persists **only in the current browser's localStorage**; no accounts, cross-device sync, push, email, server data collection or background reminders.
- **Sources checked**: UPPSC 2026 advance exam calendar; UPPSC October 2026 screening notice; BPSC 14 August 2026 *tentative* exam calendar; RPSC 26 December 2025 *proposed* 2026 exam calendar; MPSC public website, where conflicting secondary date reports were not promoted to verified dates.
- **Update policy**: edit `state-data.js` only when an original commission publication has been checked; update `verified` and `document`. Do not feed all notice-parser discoveries directly into schedule dates.

Implementation: `planner.js` owns the state planner UI and localStorage. `planner.css` is scoped to `.plan-page`; `index.html` loads both new scripts before `app.js`. The planner uses the existing URL hash navigation. Tested by Chromium browser harness for tracking, persistence, date editing, filters, ICS and narrow viewport overflow.


## Phase 05 — verified windows and private email reminders (21 October 2026)

- New **Verified deadlines** page at `#deadlines`, loaded from the manually reviewed `opportunities.json` catalog and the generated `opportunity-data.js` file. Dates use **India Standard Time**. Open / closed labels are calculated dynamically from the current Indian date. Source URLs link to the original government authority, NTA, or Ministry of Railways.
- **RRB NTPC Graduate CEN 06/2026**: 8 Oct–6 Nov 2026 registration, fee payment until 8 Nov, modification 9–18 Nov (Ministry of Railways official PIB release 11 Oct 2026).
- **Joint CSIR–UGC NET December 2026**: 7 Oct–5 Nov regular registration; 6–9 Nov late fee (+₹500); correction 10–12 Nov (NTA public notice 7 Oct 2026). The final late-fee cutoff is used for the reminder tracker, with the regular cutoff explicitly displayed in card notes.
- **UPPSC D-6/E-1/2025**: registration ended 21 Oct 2026; correction/reconciliation to 28 Oct is not a reopened form.
- **UPSC Engineering Services 2027**: registration closed 6 Oct 2026; prelims 31 Jan 2027 (official UPSC page).
- **BPSC 72nd CCE**: commission postponed the previously tentative 25 Oct prelims date; date cleared from the State Exam Planner until the commission announces a new one.
- The page saves user choices **locally on the current browser**, exports calendar reminder `.ics` files with 7- and 1-day pop-up alarms (actual delivery depends on the calendar client), and can launch an **email draft** in the user's email client. Drafting an email is not automated delivery.

### Scheduled email: optional site-admin setup only

A daily GitHub Actions workflow `.github/workflows/examatlas-email-reminders.yml` checks manually verified, open deadlines at 7 / 3 / 1 / 0 days before the deadline using `public/examatlas-india/scripts/send_deadline_emails.py`. It runs at approximately 08:10 IST and can be run manually. GitHub Actions' scheduled runs may be delayed.

**Automatic email alerts are disabled until the site administrator privately configures these Actions repository secrets** under **Settings → Secrets and variables → Actions → New repository secret**:

- `EA_SMTP_HOST` — outgoing mail server hostname (e.g., smtp.gmail.com)
- `EA_SMTP_PORT` — usually `587` (if omitted, defaults to 587)
- `EA_SMTP_USER` — SMTP login
- `EA_SMTP_PASSWORD` — SMTP application password or provider credential
- `EA_ALERT_FROM` — sender address
- `EA_ALERT_RECIPIENTS` — the site's privately managed opt-in recipient email(s), comma-separated

SMTP uses STARTTLS and will not fall back to cleartext authentication. The workflow exits without sending when the required secrets are missing. No email address, credential, or subscriber list belongs in source files, static JSON, Git history or client-side JavaScript. **There is no public visitor subscription endpoint**; to safely add one later, provide a secure backend with verified consent, unsubscribe handling and abuse controls. Daily alerts use the editorial snapshot and never imply that a newly scraped notice is an active application.

To maintain records: edit `opportunities.json`, regenerate `opportunity-data.js` from the JSON, review the dates and sources, and run `python -m unittest discover -s public/examatlas-india/scripts -p 'test_deadline_emails.py'`.

**Phase 05 update:** NTA UGC–NET December 2026 official notice confirms regular applications 8–28 Oct 2026, late-fee window 29–31 Oct 2026, correction 2–4 Nov; the final late-fee cutoff is tracked separately from the regular deadline. The SMTP digest keeps all recipient addresses in Bcc and places only the sender address in To.


## Phase 06 — The Quiet Atlas redesign

V6 introduces a calmer, search-first homepage, a horizontal five-item primary navigation with less-frequent pages under More, a muted mint and off-white palette, less dense exam cards and expandable eligibility notes. Search chips and the homepage search open the existing exam explorer with the selected query. Saved lists, official sources, registration states, dates, reminder exports and updater workflows are retained. `v6.css` is loaded last for presentation overrides and `v6-home.js` before `app.js`.

## Phase 07 — Study Studio / Preparation Hub (21 October 2026)

- New **Study hub** tab at `#prepare`; the simplified home page links directly to it.
- Five curated guides: UPSC CSE, SSC CGL, RRB NTPC, IBPS PO and CAT. These include 79 topic-level study tasks in total, grouped by subject, plus direct official portals and publisher resource links.
- **Study resources** link to original official notices/past papers and optionally to publisher study references. Books/PDFs are never republished or scraped into this repository.
- **Topic progress:** browser-only checkboxes stored in `localStorage` under `examatlas-prepare-v7`. This is not a cloud profile: clearing browser storage or switching devices clears or hides saved progress.
- **Study plan:** select 30 / 60 / 90 days and 30 / 60 / 90 / 120 daily minutes; create a rotating topic schedule, mark sessions complete and export the current seven days as an iCalendar (.ics) file. Plans are instructional suggestions, not proof of coverage or readiness.
- Topic lists are **editorial preparation guides**, not a complete official syllabus or guarantee of paper coverage. CAT's organisers do not prescribe a fixed topic-by-topic syllabus; refer to the original information bulletin and mock when provided.
- All resource URLs were reviewed during implementation, but public agency sites may change routes or require JavaScript. Review links and exam notices periodically.
- No login, analytics tracking, external APIs or server-side student data required for this release.


## Phase 08 — Pathfinder (22 October 2026)

Pathfinder (`#pathfinder`) lets visitors compare **SSC CGL, RRB NTPC, and IBPS PO**. The editorial concept crosswalk is in `pathfinder-data.js`, the interactive view in `pathfinder.js`, and styles in `pathfinder.css`. It reads V7 `examatlas-prepare-v7` checklist progress from the same browser (with no account or server upload). The 7-day study-bridge planner saves checks locally and exports a 7-day .ics calendar. Visitors can move into the target Study Studio guide.

**Important limitations:** Editorially related topics are not interchangeable syllabus requirements or a calculated readiness score. Exam patterns and difficulty differ. Dates, age, posts, vacancies, eligibility, registration status and application instructions are *not* assessed by Pathfinder. Always read each official authority's latest notification. The concept crosswalk maps V7 section-topic IDs and must be reviewed when V7 guide topics change. If the source website changes, recheck links.


## V9 — Pathfinder expansion and Notice Intelligence (22 October 2026)

- Pathfinder includes SSC CGL, SSC CHSL, RRB NTPC, RRB Group D, IBPS PO, SBI PO, UPSC CSE and CAT. `pathfinder-extra.js` adds three optional Study Studio guides and editorial mappings for five additional examinations.
- Cross-exam topics represent related preparation concepts only; they do not certify comparable difficulty, complete syllabus coverage, application eligibility, or exam readiness.
- `#intelligence` tracks possible correction titles from the official notice feed. Students may store watched exams in browser local storage; this is **not** an email or push subscription.
- `scripts/notice_intelligence.py` checks three allowlisted official source documents twice daily through the existing notice workflow and stores a normalized text SHA-256 fingerprint in `notice-snapshots.json`. First successful reads create baselines. A later changed text fingerprint creates a **needs-review** event in `notice-intelligence.json`.
- A detected revision does not specify whether any deadline, age limit, vacancy, syllabus, or application condition changed. Review the two original official documents manually before any editorial calendar update.
- Scanning may be blocked or unavailable, and revised notices can appear at *new* URLs. The title classifier catches some possible corrigenda; monitoring is not exhaustive and must not be described as guaranteed real-time protection.
- The `reviewed` list is reserved for separately validated editorial interpretations and is not populated by automation.
- Tests: `python -m unittest discover -s public/examatlas-india/scripts -p 'test_*.py'`. The GitHub Actions workflow installs BeautifulSoup and pypdf, tests both parsers, refreshes notice data, commits fingerprints and republishes GitHub Pages.



## V10 — Notice Change Review

The Notice Intelligence page now offers a separate **Reviewed changes** tab for source-backed, human-approved before/after comparisons. It starts empty; scanner candidates remain explicitly unverified. To submit or publish a review, see [NOTICE_CHANGE_REVIEW.md](NOTICE_CHANGE_REVIEW.md). The public website has no admin privileges. GitHub deploy validates approved rows before publication.
