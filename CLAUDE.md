# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build (run to catch type/compile errors)
npm run lint         # ESLint
npm run test         # Jest unit tests (tests/unit/**/*.test.{ts,tsx})
npm run test:watch   # Jest in watch mode
npm run test:e2e     # Playwright e2e (requires dev server or starts one automatically)
npm run test:e2e:ui  # Playwright with interactive UI
```

Run a single unit test file:
```bash
npx jest tests/unit/translations.test.ts
```

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

Both language variants of each legal page (`/[lang]/imprint` + `/[lang]/impressum`, `/[lang]/datenschutz` + `/[lang]/privacy`) render the same client component (`ImprintPage` / `PrivacyPage` in `src/components/`). Content is chosen at render time via `language === "de"`. The pages contain `[PLACEHOLDER]` markers for address and email that must be filled in before going live.

### Testing

- **Unit tests** (`tests/unit/`) — Jest + jsdom + React Testing Library. The translations test is the most important: it enforces that both languages have identical keys and no empty strings.
- **E2e tests** (`tests/e2e/`) — Playwright, Chromium + mobile Chrome. The dev server is reused if already running.

When adding a new translation key, always add it to **both** `en` and `de` in `translations.ts` or the unit tests will fail.

## Code Standards

- TypeScript strict mode — no `any` types
- Functional components with arrow functions
- Styling exclusively via Tailwind classes — no custom CSS
- Keep components under 150 lines; split into smaller components if exceeded
- All exported functions require JSDoc comments
- Always add the `"use client"` directive when using client-side hooks

## Git Workflow

- Branch naming: `feature/description`, `fix/description`
- Conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Always branch from `main`, never commit directly to `main`
- Before committing: lint and type-check must pass

## Important Notes

- Always optimise images with `next/image` — never use a raw `<img>` tag
- Export a `metadata` object from every page for SEO
- Use `pretty-code` (rehype-pretty-code) for syntax highlighting
