# CLAUDE.md — Repo Index

Marketing website for **Salt Flats Psychiatry** (mental health clinic, Tooele, UT).
Next.js 14 (App Router) + React 18 + TypeScript, styled with Bootstrap 5 and a large
custom stylesheet. No backend, database, API routes or tests. Production URL:
`https://saltflatspsychiatry.com`.

## Commands

- `npm install` — install dependencies
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — ESLint; no config is committed yet, so it stops at an interactive setup prompt
- `./deploy.sh` — just runs install + build and prints deploy hints (intended host: Vercel)

## Layout

```
app/
  layout.tsx              Root layout: global SEO metadata (title template, keywords,
                          OpenGraph), Inter font, Bootstrap CSS import, Font Awesome +
                          Google Fonts <link>s, Bootstrap JS bundle from jsDelivr CDN
  page.tsx                /           Home (intro, mission) + JSON-LD
  providers/page.tsx      /providers  Provider bios (Renee, Emma) + JSON-LD; /about 301s here
  services/page.tsx       /services   Service list + JSON-LD
  insurance/page.tsx      /insurance  Wraps <InsuranceChecker/> + JSON-LD
  contact/page.tsx        /contact    Contact details, hours, map link + JSON-LD
  components/
    Header.tsx            "use client" — navbar (mobile toggle state), nav links, "Book Now"
    Footer.tsx            Footer, social links
    InsuranceChecker.tsx  "use client" — searchable list; accepted plans hard-coded in
                          ACCEPTED_INSURANCES
  globals.css             ~11.6k lines: Start Bootstrap "Business Casual" theme with
                          bundled Bootstrap 5.2.3 + site overrides
  robots.ts / sitemap.ts  Generated robots.txt and sitemap.xml
  favicon.ico             App Router favicon
public/
  assets/img/             Images actually served (referenced as /assets/img/...)
  assets/img/providers/   Provider headshots (emma-west.jpg)
  assets/logo.svg, favicon.ico, site.webmanifest
assets/                   Legacy copy of images from the pre-Next.js static site. Mostly
                          unused, BUT services/page.tsx imports 3 images from here
                          (products-01/03.jpg, SaltFlatsPsych-36.jpg) — don't delete blindly
next.config.js            Image config (allows intakeq.com remote images, webp/avif),
                          security headers, 1-year cache on /assets/*, optimizeCss (critters)
Documentation/Improvements.md  Checklist of planned site improvements (mostly not started)
MIGRATION_SUMMARY.md      Notes on the HTML -> Next.js migration
.claude/launch.json       Preview config "next-dev" (npm run dev, port 3000); untracked
```

## Conventions

- Each page is a server component exporting `metadata` (title/description/keywords/
  OpenGraph, plus its own `alternates.canonical`) and embedding a schema.org JSON-LD `<script type="application/ld+json">`.
- Interactive pieces are isolated in `"use client"` components under `app/components/`.
- Styling uses Bootstrap utility classes plus classes from `globals.css`; no CSS modules
  or Tailwind.
- Indentation: tabs. Path alias `@/*` maps to the repo root.
- Business details (phone, address, hours) are duplicated across pages, footer and JSON-LD —
  update all of them together when they change. Current: 2321 N 400 E, Suite 200,
  Tooele, UT 84074; (435) 264-7926; Mon–Fri 9–5 by appointment, closed weekends.
- New routes must also be added to `app/sitemap.ts`.

## External services

- Booking: `https://saltflatswellness.intakeq.com/booking` (Header "Book Now" and CTAs)
- Messaging/patient contact: `https://spruce.care/saltflatspsychiatry`
- Social: Facebook, Instagram (in Footer)

## Known quirks

- Bootstrap is loaded twice: CSS from the npm package and again inside `globals.css`;
  the JS bundle comes from a CDN rather than npm.
- `assets/` duplicates `public/assets/` and contains a few images not in `public/`
  (`SaltFlatsPsych-81/103/142.jpg`) plus `.DS_Store` files.
- README still refers to `cd salt-flats-wellness` (old name).
