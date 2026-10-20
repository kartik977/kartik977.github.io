# ExamAtlas India

A responsive, zero-dependency static dashboard for central / all-India competitive examinations. This starter intentionally separates government job recruitment from national entrance/eligibility exams.

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
## GitHub Pages deployment

This initial version is deployed as an independent static page under the portfolio repository’s `public/examatlas-india/` directory. The existing React build copies the folder unchanged into `gh-pages` on master pushes. Public URL: https://kartik977.github.io/examatlas-india/. Future standalone repository migration requires copying this directory to a new repository and enabling Pages there.
