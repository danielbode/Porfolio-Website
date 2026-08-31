# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npm run typecheck    # tsc --noEmit
npm run lint         # ESLint
npm run test         # Jest unit tests (tests/unit/**/*.test.{ts,tsx})
npm run test:watch   # Jest in watch mode
npm run test:e2e     # Playwright e2e (requires dev server or starts one automatically)
npm run test:e2e:ui  # Playwright with interactive UI
```

These four are exactly what CI runs, so run them before pushing:
```bash
npm run lint && npm run typecheck && npm test && npm run test:e2e
```

Run a single unit test file:
```bash
npx jest tests/unit/translations.test.ts
```

Node version is pinned to 24 in `.nvmrc`, matching the Vercel project's build version. CI reads it via `node-version-file`.

## Architecture

### Routing

The app uses Next.js App Router with a mandatory `[lang]` prefix on every route:

- `/` → redirects to `/en` (`src/app/page.tsx`)
- `/[lang]` → main portfolio page (`src/app/[lang]/[[...section]]/page.tsx`)
- `/[lang]/[section]` → same main page, `ScrollToSection` auto-scrolls to the named section
- `/[lang]/impressum` and `/[lang]/imprint` → legal notice (same component, language-aware)
- `/[lang]/datenschutz` and `/[lang]/privacy` → privacy policy (same component, language-aware)

The `[lang]/layout.tsx` wraps all routes with `LanguageProvider`, initialising language from the URL segment.

### Internationalisation

All user-visible strings live in `src/lib/translations.ts` as a `translations` object keyed by `"en" | "de"`. Components access translations via `const { t, language } = useLanguage()` from `src/lib/LanguageContext.tsx`.

**URL slugs are language-specific** — this applies to both main sections and legal pages:

| Section element ID | EN slug | DE slug |
|---|---|---|
| `about` | `about` | `ueber-mich` |
| `skills` | `skills` | `kenntnisse` |
| `experience` | `experience` | `erfahrung` |
| `projects` | `projects` | `projekte` |
| `education` | `education` | `ausbildung` |
| `contact` | `contact` | `kontakt` |
| (legal) | `privacy` / `imprint` | `datenschutz` / `impressum` |

The mapping lives in `src/lib/sectionSlugs.ts` and is used by:
- `Navbar` — builds correct `href` per language and updates the URL bar via `IntersectionObserver`
- `ScrollToSection` — resolves any incoming slug back to a DOM element ID
- `LanguageContext.setLanguage` — remaps the current URL slug to the equivalent in the target language on language switch

### Language switching

`LanguageContext.setLanguage` does two things: updates React state (triggers re-render) and updates the URL bar via `history.replaceState` (no page navigation). The Navbar's `IntersectionObserver` keeps the URL slug in sync as the user scrolls. Legal pages (`ImprintPage`, `PrivacyPage`) are client components that render EN or DE content directly based on `useLanguage()`.

### Navbar navigation behaviour

Nav links use `scrollIntoView` when the target section element exists in the DOM (main page), and fall back to normal `href` navigation when it doesn't (legal pages). This is the guard in `handleNavClick`:

```ts
const el = document.getElementById(sectionId);
if (!el) return; // let the href navigate
```

### Legal pages

Both language variants of each legal page (`/[lang]/imprint` + `/[lang]/impressum`, `/[lang]/datenschutz` + `/[lang]/privacy`) render the same client component (`ImprintPage` / `PrivacyPage` in `src/components/`). Content is chosen at render time via `language === "de"`. `ImprintPage` also includes a Formspree-powered contact form.

### Testing

- **Unit tests** (`tests/unit/`) — Jest + jsdom + React Testing Library. The translations test is the most important: it enforces that both languages have identical keys and no empty strings.
- **E2e tests** (`tests/e2e/`) — Playwright, Chromium + mobile Chrome. The dev server is reused if already running.

When adding a new translation key, always add it to **both** `en` and `de` in `translations.ts` or the unit tests will fail.

**Always wait for hydration before clicking anything in an e2e test.** A click fired right
after `page.goto()` lands on server-rendered markup and is silently discarded — this passes
on a fast local machine and fails on CI. Use the helper:

```ts
import { waitForHydration } from "./helpers";
// in beforeEach, after page.goto()
await waitForHydration(page);
```

It waits for the navbar's theme toggle, which is guarded by a `mounted` flag and therefore
only ever renders client-side — a precise signal that event handlers are attached.

**Smoke tests** are a subset of the e2e suite tagged `@smoke`, re-run against the real
deployment by the CD pipeline:

```ts
test("page title is correct", { tag: "@smoke" }, async ({ page }) => { ... });
```

Keep this set small and focused on "is the deployment fundamentally alive" — page loads,
sections render, language switching works, the private email is not exposed. Run them with
`npx playwright test --grep @smoke`.

`playwright.config.ts` reads two environment variables. `PLAYWRIGHT_BASE_URL` points the
suite at a deployed URL and skips the local `webServer` entirely;
`VERCEL_AUTOMATION_BYPASS_SECRET` adds the `x-vercel-protection-bypass` header so tests get
past Vercel's Deployment Protection. Unset, both are inert and local behaviour is unchanged.

## CI/CD

Vercel's Git auto-deploy is **switched off** (`vercel.json` → `git.deploymentEnabled: false`).
GitHub Actions is the only path to production. Never re-enable auto-deploy to work around a
broken pipeline — fix the pipeline.

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
| `.github/workflows/ci.yml` | PR + `workflow_call` | Lint, typecheck, unit, e2e as four parallel jobs |
| `.github/workflows/deploy.yml` | Push to `main` | Staging → smoke → approval gate → production |
| `.github/workflows/preview.yml` | Pull request | Per-PR preview deployment, URL as a sticky comment |

Things worth knowing before changing any of this:

- **`ci.yml` is reused, not duplicated.** `deploy.yml` calls it via `workflow_call`, so the
  release path always runs the same checks as the PR path. Add a check once, in `ci.yml`.
- **The approval gate is infrastructure, not YAML.** It comes from a required reviewer on the
  `production` GitHub environment. Removing `environment: production` from the job silently
  removes the gate.
- **`--prebuilt` deploys** upload `.vercel/output` rather than rebuilding on Vercel, so the
  artifact that passed the tests is the artifact that ships.
- **`VERCEL_TOKEN` must be a Full Account token.** The Vercel CLI calls `/v2/user` at startup,
  which team- and project-scoped tokens deny — they fail with the misleading
  `Could not retrieve Project Settings`, which has nothing to do with the `.vercel` directory.
- Repo secrets in use: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`,
  `VERCEL_AUTOMATION_BYPASS_SECRET`.

## Code Standards

- TypeScript strict mode — no `any` types
- Functional components with arrow functions
- Styling exclusively via Tailwind classes — no custom CSS
- Keep components under 150 lines; split into smaller components if exceeded
- All exported functions require JSDoc comments
- Always add the `"use client"` directive when using client-side hooks

## Git Workflow

- Branch naming: `feature/description`, `fix/description`, `docs/description`
- Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `ci:`
- Always branch from `main`. `main` is a **protected branch** — direct pushes and force pushes
  are rejected, so every change goes through a PR
- Before committing: lint and type-check must pass
- **Merge commits only — never squash.** Squash merging is disabled on the repository; do not
  re-enable it to tidy up a branch's history. Clean the branch up before merging instead
- Delete the branch after merging (GitHub offers this on the merge button)

Merging requires four green checks: `Lint`, `Type Check`, `Unit Tests`, `E2E Tests`.
`enforce_admins` is deliberately off, so the repo owner can override the protection if the
pipeline itself is what's broken. Treat that as an emergency exit, not a shortcut.

## Important Notes

- Always optimise images with `next/image` — never use a raw `<img>` tag
- Export a `metadata` object from every page for SEO
