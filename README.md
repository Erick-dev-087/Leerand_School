# Leerand School, Thika — Website

Public marketing website for Leerand School, Thika. **Phase 0 (frontend prototype)** — no backend yet; the admissions form and analytics are wired as abstractions ready for Phase 2 (see `backend.md`, `analytics.md`).

## Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **Framer Motion** (reveals, hero slideshow, scroll-focus philosophy)
- Fonts: **Lora** (headings) + **Plus Jakarta Sans** (body) via `next/font`

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Structure
```
app/                 one folder per route (/, our-school, academics,
                     activities, why-leerand, admissions, events, contact, privacy)
components/
  layout/            Navbar (+ mobile slide-in), Footer
  ui/                CTAButton, MediaImage, SectionIntro, ImageTextSection,
                     ActivityCard, EventCard, ProgressFlow, PageHero, CtaBand,
                     WhatsAppButton
  home/              homepage sections (Hero, BrandSpine, LeerandChild, previews…)
  why/               PhilosophyScroll (scroll-focus Learn·Innovate·Succeed)
  admissions/        AdmissionsForm (client validation, no backend yet)
  contact/           ContactInfo
  analytics/         PageViewTracker, TrackOnMount
  motion/            ScrollReveal
lib/
  site.ts            nav, contact details, brand spine   ← PLACEHOLDER contacts
  images.ts          image manifest: alt text + focal object-position
  events.ts          SAMPLE event data (clearly marked)  ← replace in Phase 2
  testimonials.ts    EMPTY by design — add only approved, real quotes
  analytics.ts       provider-agnostic track() (no PII)
public/images/       photos copied + renamed from /Media
```

## Before launch — replace placeholders
- **Contacts** in `lib/site.ts` (phone, email, WhatsApp number, address, hours, socials).
- **Mission / Vision / Philosophy** wording in `app/our-school/page.tsx`.
- **Why Leerand pillars** and all working headlines/copy with official text.
- **Testimonials**: add real, school-approved quotes to `lib/testimonials.ts` (never fabricate).
- **Events**: `lib/events.ts` holds sample events; swap for the live source.
- **Map** on `/contact` uses an approximate Google Maps search embed.

## Image notes
- Photos live in `/public/images` (copied from `/Media`, renamed by purpose). Alt text + focal crop per image in `lib/images.ts`.
- Excluded from the site: the Spider-Man "swipe left" and other social-template graphics (licensed/branded artwork), and the red string/divider filler.
- Some sports photos still carry a faint "LeerandSchoolThika" watermark / carousel number badge — fine for the prototype; request clean originals before launch.
- The logo (`leerand-logo.jpg`) is on a white background (not transparent) — a transparent PNG/SVG would sit better on dark areas.

## Design decisions
- Palette: cream/navy/royal-blue base with gold + orange accents (per `design.md`), plus the logo's **red** used sparingly as a minor accent.
- Accessibility: semantic landmarks, skip link, keyboard focus styles, labelled form fields, `prefers-reduced-motion` respected throughout.
