# Daniel Bode — Portfolio Website

[![CI](https://github.com/danielbode/Porfolio-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/danielbode/Porfolio-Website/actions/workflows/ci.yml)
[![Deploy](https://github.com/danielbode/Porfolio-Website/actions/workflows/deploy.yml/badge.svg)](https://github.com/danielbode/Porfolio-Website/actions/workflows/deploy.yml)

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
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm test           # unit tests
npm run test:e2e   # Playwright e2e tests
```

## Deployment Pipeline

Vercel's Git auto-deploy is switched off (`vercel.json` → `git.deploymentEnabled: false`). Every release goes through GitHub Actions instead, so nothing reaches production without passing the same checks and an explicit approval.

```
Pull request                          Push to main
   │                                     │
   ├─ lint                               ├─ CI  (the same four jobs, reused
   ├─ typecheck      required status     │       via workflow_call)
   ├─ unit           checks on main      │
   ├─ e2e                                ├─ deploy staging → preview URL
   │                                     │
   └─ preview deploy                     ├─ smoke tests against that URL
      → URL posted as a PR comment       │     ✗ → pipeline stops here
                                         │
                                         ⏸  manual approval (GitHub environment)
                                         │
                                         └─ deploy production → danielbode.me
```

| Workflow | Trigger | Purpose |
|---|---|---|
| `ci.yml` | PR + `workflow_call` | Lint, type-check, unit and e2e tests. Reused by the deploy pipeline so CI and CD can't drift apart. |
| `deploy.yml` | Push to `main` | Staging deploy → smoke tests → approval gate → production deploy. |
| `preview.yml` | Pull request | Per-PR preview deployment, URL posted as a sticky comment. |

A few details worth noting:

- **Smoke tests reuse the e2e suite.** A subset of `tests/e2e` is tagged `@smoke` and run a second time against the real deployment via `PLAYWRIGHT_BASE_URL`, which makes `playwright.config.ts` skip its local dev server. This catches what a local run can't — missing environment variables, broken routing, production-build-only failures.
- **The approval gate is infrastructure, not YAML.** It comes from a required reviewer on the `production` GitHub environment. If the smoke tests fail, the production job never starts and no approval is ever requested.
- **`--prebuilt` deploys** upload `.vercel/output` rather than rebuilding on Vercel, so the artifact that passed the tests is the artifact that ships.
