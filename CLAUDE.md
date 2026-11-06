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
  about/page.tsx          /about      Clinic + provider bio + JSON-LD
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
public/
  assets/img/             Images actually served (referenced as /assets/img/...)
  assets/logo.svg, favicon.ico, site.webmanifest
assets/                   Legacy copy of images from the pre-Next.js static site. Mostly
                          unused, BUT services/page.tsx imports 3 images from here
                          (products-01/03.jpg, SaltFlatsPsych-36.jpg) — don't delete blindly
next.config.js            Image config (allows intakeq.com remote images, webp/avif),
                          security headers, 1-year cache on /assets/*, optimizeCss (critters)
Documentation/Improvements.md  Checklist of planned site improvements (mostly not started)
MIGRATION_SUMMARY.md      Notes on the HTML -> Next.js migration
```

## Conventions

- Each page is a server component exporting `metadata` (title/description/keywords/
  OpenGraph) and embedding a schema.org JSON-LD `<script type="application/ld+json">`.
- Interactive pieces are isolated in `"use client"` components under `app/components/`.
- Styling uses Bootstrap utility classes plus classes from `globals.css`; no CSS modules
  or Tailwind.
- Indentation: tabs. Path alias `@/*` maps to the repo root.
- Business details (phone, address, hours) are duplicated across pages, footer and JSON-LD —
  update all of them together when they change.

## External services

- Booking: `https://saltflatswellness.intakeq.com/booking` (Header "Book Now" and CTAs)
- Messaging/patient contact: `https://spruce.care/saltflatspsychiatry`
- Social: Facebook, Instagram (in Footer)

## Known quirks

- `app/sitemap.ts` lists ~68 URLs, but only 5 routes exist (`/`, `/about`, `/services`,
  `/insurance`, `/contact`). The other ~63 keyword URLs (e.g. `/adhd-treatment`,
  `/psychiatrist-tooele`) return 404.
- Bootstrap is loaded twice: CSS from the npm package and again inside `globals.css`;
  the JS bundle comes from a CDN rather than npm.
- `assets/` duplicates `public/assets/` and contains a few images not in `public/`
  (`SaltFlatsPsych-81/103/142.jpg`) plus `.DS_Store` files.
- The root layout sets `alternates.canonical: "/"`, so every page declares the homepage
  as its canonical URL.
- README still refers to `cd salt-flats-wellness` (old name).
