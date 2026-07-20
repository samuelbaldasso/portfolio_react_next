# Samuel Baldasso — Portfolio

Personal portfolio for **Samuel Baldasso**, Backend Software Engineer (Java & Cloud-Native Systems).

Built with **Next.js 15 (App Router)**, **TypeScript (strict)** and **Tailwind CSS**. Dark mode by default with a light toggle, EN/PT-BR language toggle, and a Projects section fed by the public GitHub API with ISR caching (revalidated every hour) and a static fallback when the API is unavailable or rate-limited.

## Project structure

```
app/
  layout.tsx            # Root layout, fonts, metadata/SEO, theme init script
  page.tsx              # Single page — fetches GitHub repos server-side (ISR 1h)
  globals.css           # Tailwind + theme CSS variables + reveal animations
  icon.svg              # Favicon
  opengraph-image.tsx   # Generated OG image
  sitemap.ts / robots.ts
components/
  providers.tsx         # Theme + language context
  header.tsx hero.tsx about.tsx experience.tsx
  projects.tsx skills.tsx contact.tsx footer.tsx
  section.tsx reveal.tsx metric-text.tsx icons.tsx
lib/
  github.ts             # GitHub API fetch, filtering, featured ordering, fallback
  i18n.ts               # EN + PT-BR dictionaries and external links
public/
  resume.pdf            # ← add your resume here (Hero "Resume" button links to it)
```

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (fetches GitHub repos at build time)
npm run start      # serve the production build
npm run typecheck  # strict TypeScript check
```

**Before deploying:** drop your resume PDF at `public/resume.pdf`.

Optionally set the canonical URL (used for Open Graph, sitemap and robots):

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy

### Vercel (recommended)

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected, no configuration needed.
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable with your production URL.

ISR keeps the GitHub project list fresh (revalidated every hour) with zero client-side requests.

### GitHub Pages (alternative)

GitHub Pages only serves static files, so switch to a static export:

1. In `next.config.mjs` add `output: "export"` (and remove `app/opengraph-image.tsx`, which needs a server runtime — replace it with a static `public/og.png` if desired).
2. Run `npm run build` — the site is emitted to `out/`.
3. Publish `out/` with GitHub Actions ([official guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)). Note: with a static export the repo list is frozen at build time; re-run the workflow (e.g. on a daily cron) to refresh it.

## Suggested future improvements

- Blog / writing section (MDX) for distributed-systems deep dives.
- Privacy-friendly analytics (Vercel Analytics or Plausible).
- Contact form with a serverless handler (Resend) instead of mailto.
- Per-language OG images and `hreflang` metadata for PT-BR.
- Playwright smoke tests + Lighthouse CI on pull requests.
