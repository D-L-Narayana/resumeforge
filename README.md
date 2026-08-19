# ResumeForge

Premium resume builder with a real-time ATS score engine. Pure HTML/CSS/JS — zero runtime dependencies, fully client-side and private.

## Features
- Live resume builder with instant preview across 6 recruiter-approved templates (Modern, Classic, Minimal, Executive, Compact, Slate)
- 8-point ATS check engine with actionable fix hints (client-side, nothing leaves the browser)
- Cover letter studio with three tone presets and live preview
- Job description keyword matcher with live coverage percentage
- Examples library: 5 complete role resumes, all scoring 90+ ATS
- Interview prep studio: 48 curated questions across 6 role tracks
- Bullet doctor: per-bullet feedback on verbs, numbers, weak phrases, length
- Application tracker with pipeline stats and JSON export/import
- One-click PDF export via print-optimized styling
- Monetization-ready landing page: Free / Pro $9mo / Lifetime $49 tiers

## Run locally
```
python3 -m http.server 8080
```
Then open http://localhost:8080

## Structure
- `index.html` — marketing landing page
- `builder.html` — live builder + ATS scoring
- `js/data.js` — templates, pricing, sample resume data
- `js/ats.js` — pure scoring engine (node-testable)
- `tests/logic.test.js` — offline logic tests (`node tests/logic.test.js`)
