<div align="center">

# ResumeForge

**Build a resume that gets interviews.**

A complete, privacy-first career toolkit — live resume builder, real-time ATS scoring, PDF resume scanner, cover letter studio, interview prep, and an application tracker. Pure HTML/CSS/JS with zero runtime dependencies, designed in the Apple design language.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![E2E](https://img.shields.io/badge/playwright%20e2e-15%2F15-brightgreen.svg)
![Dependencies](https://img.shields.io/badge/runtime%20deps-zero-orange.svg)
![Privacy](https://img.shields.io/badge/data%20leaves%20browser-never-black.svg)

![ResumeForge home](docs/home.png)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
  - [Resume Builder](#resume-builder)
  - [ATS Scanner (Upload & Score)](#ats-scanner-upload--score)
  - [Examples Library](#examples-library)
  - [Interview Prep](#interview-prep)
  - [Application Tracker](#application-tracker)
  - [Cover Letter Studio](#cover-letter-studio)
- [The ATS Engine](#the-ats-engine)
- [Tech Stack & Architecture](#tech-stack--architecture)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Design System](#design-system)
- [Roadmap](#roadmap)
- [License](#license)

---

## About

ResumeForge is a monetization-ready career product (Free / Pro $9mo / Lifetime $49 tiers) that solves the whole job-application loop in one place. Everything runs **entirely in the browser** — resumes, cover letters, and job data never touch a server. No accounts, no tracking, no uploads.

**Summary of what ships:**

| Area | What you get |
| --- | --- |
| Build | Live resume builder, 6 recruiter-approved templates, one-click PDF |
| Score | 8-check real-time ATS engine + 10-check full-text scanner with PDF upload |
| Match | Job-description keyword matcher with live coverage % |
| Write | Cover letter studio with 3 tone presets |
| Prep | 48 curated interview questions across 6 role tracks |
| Track | Application pipeline tracker with JSON export/import |

---

## Features

### Resume Builder

Real-time preview across six templates (Modern, Classic, Minimal, Executive, Compact, Slate), live ATS scoring on every keystroke, a per-bullet **Bullet Doctor** (action verbs, quantification, weak-phrase detection, length), and a JD keyword matcher — all in one split-pane studio.

![Resume Builder](docs/builder.png)

### ATS Scanner (Upload & Score)

Drop a **PDF, TXT, or MD** resume (or paste text) and get an animated score ring, 10 weighted checks with concrete fixes, document stats, and optional keyword coverage against any job description. PDF text extraction runs fully client-side via a vendored pdf.js — nothing is uploaded anywhere.

![ATS Scanner](docs/scanner.png)

### Examples Library

Five complete role resumes — Software Engineer, Product Manager, Data Analyst, Marketing Manager, Account Executive — each scoring 100/100 on the ATS engine, openable directly in the builder via deep links (`builder.html?example=swe`).

![Examples Library](docs/examples.png)

### Interview Prep

48 curated questions across six role tracks (General, SWE, PM, Data, Marketing, Sales), each with a coaching tip. Click a card when you can answer it cold and watch your readiness counter climb.

![Interview Prep](docs/interview.png)

### Application Tracker

A pipeline board for every application — Saved → Applied → Interview → Offer — with live stage counts, inline editing, and JSON export/import so your data stays yours.

![Application Tracker](docs/tracker.png)

### Cover Letter Studio

Generate a tailored draft in three tones (Confident, Friendly, Formal), edit every paragraph with live preview and a word-count meter, and export a print-perfect PDF.

![Cover Letter Studio](docs/coverletter.png)

---

## The ATS Engine

Two scoring engines, both pure functions (node-testable, no DOM):

**Builder engine — `js/ats.js` (8 checks, 100 pts):** contact info (15), summary quality (15), 6+ skills (15), 2+ roles (20), quantified achievements (15), action verbs (10), education (10), location (5) — wait, weights per check: contact 10, summary 15, skills 15, experience 20, quantified 15, verbs 10, education 10, location 5.

**Scanner engine — `js/parse.js` (10 checks, 100 pts):** contact (15), experience/education/skills sections (10 each), summary (5), quantified achievements (15), action verbs (10), healthy length (10), bullet formatting (10), minimal first-person pronouns (5).

Both come with actionable fix hints, and the keyword matcher (`js/match.js`) extracts the top 18 job-description terms with a stop-word filter and reports matched vs. missing.

---

## Tech Stack & Architecture

Pure **HTML + CSS + vanilla JS**. No frameworks, no build step, no runtime CDN calls — GSAP, pdf.js, and fonts are all vendored locally.

```
resumeforge/
├── index.html            # Landing page
├── builder.html          # Resume builder + ATS + JD match + bullet doctor
├── scan.html             # Upload/paste ATS scanner
├── examples.html         # 5 role resumes
├── interview.html        # 48-question prep studio
├── tracker.html          # Application pipeline
├── coverletter.html      # Cover letter studio
├── css/                  # Apple-language design system (base + per-page)
├── js/
│   ├── ats.js            # 8-check structured-resume scorer (pure)
│   ├── parse.js          # 10-check raw-text scorer (pure)
│   ├── match.js          # JD keyword extraction + matching (pure)
│   ├── bulletlib.js      # Per-bullet analyzer (pure)
│   ├── coverlib.js       # Tone-based letter generator (pure)
│   ├── examples.js       # 5 complete role resumes (data)
│   ├── questions.js      # 48 interview questions (data)
│   ├── builder|scan|cover|interview|tracker|landing|fx.js  # UI layers
├── vendor/               # gsap.min.js, pdf.js + worker, self-hosted fonts
├── tests/
│   ├── logic.test.js     # 40+ assertions over every pure module
│   └── e2e.js            # 15-check Playwright suite across all pages
└── docs/                 # README screenshots
```

---

## Getting Started

```bash
git clone https://github.com/Rahul777111/resumeforge.git
cd resumeforge
python3 -m http.server 8080   # any static server works
# open http://localhost:8080
```

No install, no build, no environment variables.

---

## Testing

```bash
node tests/logic.test.js   # pure-logic suite: ATS engines, matcher, bullet doctor, data integrity
node tests/e2e.js          # Playwright: 15 assertions across all 7 pages (needs a server on :8043)
```

Both suites are green on `main`.

---

## Design System

Modeled on the Apple design language, extracted from live reference study of apple.com:

- SF Pro system type stack, tight-tracked display headlines, gray subheads
- Frosted 52px nav, solid `#0071e3` pill CTAs with outlined secondary pills
- Alternating white / `#f5f5f7` / pure-black full-bleed sections
- White tiles with soft layered shadows, divider-line FAQ accordions
- GSAP micro-interactions: magnetic buttons, cursor dot + trailing ring, staged hero entrance
- Full `prefers-reduced-motion` support; print styles produce clean PDF exports

---

## Roadmap

- Salary negotiation toolkit
- Resume text importer (paste → structured fields)
- More templates + custom accent colors
- Cover letter A/B variants

---

## License

Released under the [MIT License](LICENSE).
