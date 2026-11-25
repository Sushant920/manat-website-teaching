# Manat - Project Context (for humans & agents)

> Living brief for the Manat coaching website. Read this first before changing copy, design, or structure.

## What this is

**Manat Coaching Classes** - professional tuition institute in **Chembur, Mumbai**.

| Track | What is taught |
| --- | --- |
| School (up to Class 10) | Boards: **SSC, CBSE, ICSE, HSC, IB, IGCSE** (+ related). Subjects listed on site (languages, maths, science, EVS, social studies, etc.) |
| Junior College (FYJC & SYJC) | **Commerce stream**, all core commerce subjects |
| Graduation | **Commerce courses** / degree papers |

## Brand colour (owner-provided)

Primary purple sampled from owner swatch: **`#905CB5`**

Light-theme palette:

| Token | Hex |
| --- | --- |
| Brand | `#905CB5` |
| Brand deep | `#6B3D91` |
| Brand soft | `#B07DCC` |
| Brand mist / pale | `#F4ECFA` / `#FAF6FD` |
| Surface | `#FCFAFE` |
| Ink | `#1A1520` |

## Logo

Official brand artwork: open book + graduate reaching for a star, wordmark **MANAT**, tagline script. File: `apps/web/public/manat-logo.png` (navy + gold). Used via `components/Logo.tsx`. On dark footer, logo sits on a white pad so navy art stays readable.

## Site structure

Inspired by coaching-institute sites (e.g. Saraswati Classes pattern):

Top bar → Hero (boards chips + enquiry) → Stats → **What We Teach** (offerings + subject lists) → About → Why → Mentor → How to join → Location → FAQ → Enquiry band → Footer + floating WhatsApp/Call.

Decorative geometric SVGs: `components/Decor.tsx` (orbs, rings, grids, triangles, dots).

## Contacts

- Phone: **+91 91673 09982**
- Email: **manatgupta1157@gmail.com**
- Tagline: `Don't just learn. Educate yourself.`

## Stack

Next.js 15 + Tailwind monorepo (`apps/web`). `npm run dev` from repo root.

## Enquiry email (Resend)

Quick Enquiry + Contact forms `POST` to `/api/contact`, which emails **manatgupta1157@gmail.com** via Resend.

Setup:

1. Sign up at https://resend.com with **manatgupta1157@gmail.com**.
2. Create an API key.
3. Copy [`apps/web/.env.example`](../apps/web/.env.example) to `apps/web/.env.local` and set `RESEND_API_KEY`.
4. On Vercel: Project Settings → Environment Variables → add the same keys for Production and Preview.

```bash
RESEND_API_KEY=re_xxxxx
CONTACT_TO_EMAIL=manatgupta1157@gmail.com
CONTACT_FROM_EMAIL=Manat Website <onboarding@resend.dev>
```

Without `RESEND_API_KEY`, the API returns **503** (no false success). Honeypot field `website` silently accepts bot spam without emailing.

Later: verify a custom domain in Resend and update `CONTACT_FROM_EMAIL`.

## Agent guidelines

- Keep **light theme** + purple brand unless owner changes colour again.
- List boards evenly (do not over-emphasise IB alone).
- Prefer SVG decorations; do not invent fees/results.
- Update this file when brand or offerings change.
