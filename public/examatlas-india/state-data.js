/* ExamAtlas Phase 4 — manually verified official state-calendar records.
 * Only label an exam date as published where the ORIGINAL commission is the source.
 * An exam timetable does not verify an application window or individual eligibility.
 * Source review: 2026-10-21. Dates follow India Standard Time (YYYY-MM-DD). */
window.EXAMATLAS_STATE_DATA = [
  {
    id:'uppsc-pcs-prelims-2026', state:'Uttar Pradesh', agency:'UPPSC',
    title:'Combined State / Upper Subordinate Services (PCS) — Prelims 2026',
    stage:'Preliminary examination', dates:['2026-12-06'], dateStatus:'tentative',
    document:'UPPSC 2026 examination calendar (30 January 2026)',
    sourceUrl:'https://uppsc.up.nic.in/CMS/Examination/EC.pdf',
    portalUrl:'https://uppsc.up.nic.in/',
    eligibility:'Typically requires a bachelor’s degree; age limits, reservations, post-specific qualifications and attempts must be checked in Advertisement A-1/E-1/2026.',
    application:'An earlier PCS 2026 advertisement appeared on the commission portal. This card does not assert applications remain open.',
    registrationStart:null, registrationEnd:null,
    verified:'2026-10-21'
  },
  {
    id:'uppsc-homeopathy-2025', state:'Uttar Pradesh', agency:'UPPSC',
    title:'Homoeopathic Medical Officer — Screening Exam 2025',
    stage:'Screening examination', dates:['2026-10-24'], dateStatus:'published',
    document:'UPPSC official admit-card / exam-district notice, advertisement D-6/E-1/2025',
    sourceUrl:'https://uppsc.up.nic.in/',
    portalUrl:'https://uppsc.up.nic.in/',
    eligibility:'A specialist medical qualification and professional registration may be required; verify the exact post and advertisement before acting.',
    application:'Existing recruitment-cycle examination; do not treat this as a new application opening.',
    registrationStart:null, registrationEnd:null,
    verified:'2026-10-21'
  },
  {
    id:'bpsc-72-cce-2026', state:'Bihar', agency:'BPSC',
    title:'72nd Combined Competitive Examination — Prelims 2026',
    stage:'Preliminary examination', dates:['2026-10-25'], dateStatus:'tentative',
    document:'BPSC examination calendar dated 14 August 2026 — all dates tentative',
    sourceUrl:'https://bpsc.bihar.gov.in/exam-calendar/',
    portalUrl:'https://bpsc.bihar.gov.in/advertisement/',
    eligibility:'A university degree is generally expected for CCE; verify the 72nd CCE advertisement for age, category, language and eligible posts.',
    application:'The calendar lists an exam date, not a registration start/end date. Consult the advertisement page for the application link.',
    registrationStart:null, registrationEnd:null,
    verified:'2026-10-21'
  },
  {
    id:'bpsc-acf-2026', state:'Bihar', agency:'BPSC',
    title:'Assistant Conservator of Forests — Written Exam 2026',
    stage:'Written examination', dates:['2026-11-25','2026-11-26','2026-11-27','2026-11-28','2026-11-29','2026-11-30'], dateStatus:'tentative',
    document:'BPSC examination calendar dated 14 August 2026, advertisement 02/2026',
    sourceUrl:'https://bpsc.bihar.gov.in/exam-calendar/',
    portalUrl:'https://bpsc.bihar.gov.in/advertisement/',
    eligibility:'Degree subject requirements and physical standards may apply to forest-service roles. Use Advertisement 02/2026 for exact conditions.',
    application:'Written exam dates are tentative. The application period is not established by the calendar.',
    registrationStart:null, registrationEnd:null,
    verified:'2026-10-21'
  },
  {
    id:'rpsc-protection-officer-2025', state:'Rajasthan', agency:'RPSC',
    title:'Protection Officer — Recruitment Exam 2025',
    stage:'Recruitment examination', dates:['2026-11-15'], dateStatus:'proposed',
    document:'RPSC 2026 proposed examination calendar (press note, 26 December 2025)',
    sourceUrl:'https://rpsc.rajasthan.gov.in/Static/PressNotes/E3E7BA50-CBD3-43B7-A636-52DB3FED0E74.pdf',
    portalUrl:'https://rpsc.rajasthan.gov.in/',
    eligibility:'Role-specific qualifications and experience are set by the Protection Officer advertisement. Do not infer eligibility from the exam calendar.',
    application:'Only a proposed examination date is verified. The portal link is not a claim of an active form.',
    registrationStart:null, registrationEnd:null,
    verified:'2026-10-21'
  },
  {
    id:'rpsc-ras-upcoming', state:'Rajasthan', agency:'RPSC',
    title:'RAS / Rajasthan State & Subordinate Services — Next Cycle',
    stage:'Upcoming recruitment cycle', dates:[], dateStatus:'unannounced',
    document:'RPSC official examination dates and recruitment announcements',
    sourceUrl:'https://rpsc.rajasthan.gov.in/',
    portalUrl:'https://rpsc.rajasthan.gov.in/',
    eligibility:'Usually requires graduation for the general state-services exam, with age and category rules in the cycle-specific notification.',
    application:'No verified dates or direct form for a new RAS cycle have been entered.',
    registrationStart:null, registrationEnd:null,
    verified:'2026-10-21'
  },
  {
    id:'mpsc-group-c-2026', state:'Maharashtra', agency:'MPSC',
    title:'Maharashtra Group C Services — 2026',
    stage:'Competitive preliminary examination', dates:[], dateStatus:'needs-review',
    document:'MPSC official schedule; later revisions must be reconciled',
    sourceUrl:'https://mpsc.gov.in/',
    portalUrl:'https://mpsconline.gov.in/candidate/login',
    eligibility:'Requirements differ for Clerk-Typist, Tax Assistant, Industry Inspector and other posts, including education and language/typing skills where applicable.',
    application:'Published exam dates conflict across secondary reports. Awaiting a verifiable latest original MPSC revision; no date is displayed.',
    registrationStart:null, registrationEnd:null,
    verified:'2026-10-21'
  },
  {
    id:'mpsc-rajyaseva-next', state:'Maharashtra', agency:'MPSC',
    title:'Maharashtra State Services / Rajyaseva — Next Cycle',
    stage:'State services competitive examination', dates:[], dateStatus:'unannounced',
    document:'MPSC official notices / exam timetable',
    sourceUrl:'https://mpsc.gov.in/',
    portalUrl:'https://mpsconline.gov.in/candidate/login',
    eligibility:'Graduation is generally required; confirm Marathi-language, age, domicile, post and reservation requirements in the official notification.',
    application:'Future cycle date and live application period have not been verified.',
    registrationStart:null, registrationEnd:null,
    verified:'2026-10-21'
  }
];