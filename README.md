# Daniel Bode — Portfolio Website

Source code for my personal portfolio at [danielbode.me](https://danielbode.me).

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## What's in here

This is a single-page portfolio with a sticky navbar that scrolls between sections. A few things worth noting about how it works:

- **Internationalisation** — all content lives in `src/lib/translations.ts` as a plain object keyed by `"en" | "de"`. No i18n library. Language state is managed via a React context (`LanguageContext`) and the active language is stored in the URL path (`/en/...`, `/de/...`). Switching language remaps the current URL slug to its equivalent in the other language without a page navigation.
- **Language-specific URL slugs** — each section has a different URL slug per language (e.g. `/en/experience` vs `/de/erfahrung`). The mapping lives in `src/lib/sectionSlugs.ts`. An `IntersectionObserver` in the Navbar keeps the URL bar in sync as the user scrolls.
- **Dark mode** — class-based via `next-themes`, respects system preference on first visit.
- **Routing** — Next.js App Router with a mandatory `[lang]` prefix on every route. Legal pages (`/[lang]/imprint`, `/[lang]/impressum`, etc.) render the same component, switching content based on the language context.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Theme | next-themes |
| Icons | lucide-react |
| Unit Tests | Jest + React Testing Library |
| E2E Tests | Playwright |

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build      # production build / type-check
npm test           # unit tests
npm run test:e2e   # Playwright e2e tests
```
