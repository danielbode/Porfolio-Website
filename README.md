# Daniel Bode — Portfolio Website

Personal portfolio website for Daniel Bode, iOS Developer based in Munich.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- **Dark / Light mode** — class-based via `next-themes`, respects system preference
- **German / English** — full translation of all content via a React context
- **Responsive** — mobile-first, tested at 375 px, 768 px, and 1280 px
- **Static export ready** — pre-renders as static HTML, deployable to Vercel, Netlify, or any CDN
- **SEO metadata** — Open Graph tags and keyword metadata in `layout.tsx`

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

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, Tailwind imports, dark mode variant
│   ├── layout.tsx           # Root layout with Providers (ThemeProvider + LanguageProvider)
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── Navbar.tsx           # Sticky nav with dark-mode and language toggles
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section with progress bars
│   ├── Experience.tsx       # Work experience timeline
│   ├── Projects.tsx         # Project cards
│   ├── Education.tsx        # Education card
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer
│   └── Providers.tsx        # ThemeProvider + LanguageProvider wrapper
└── lib/
    ├── translations.ts      # All EN/DE strings
    └── LanguageContext.tsx  # Language context and hook
tests/
├── unit/                    # Jest + React Testing Library unit tests
└── e2e/                     # Playwright end-to-end tests
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run unit tests
npm test

# Run E2E tests (starts its own server automatically)
npm run test:e2e

# Run E2E tests in interactive UI mode
npm run test:e2e:ui
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation

### Updating content

All visible text lives in `src/lib/translations.ts`. Edit the `en` and `de` objects — changes propagate to the whole site automatically.

### Replacing the current employer placeholder

Search for `[Company Name]` / `[Unternehmensname]` in `src/lib/translations.ts` and replace with the actual company name.

### Adding a profile photo

In `src/components/About.tsx`, replace the `<span>DB</span>` initials placeholder with a Next.js `<Image>` component pointing to your photo in `/public/`.

## Deployment

The site pre-renders as static HTML and deploys with zero configuration to Vercel:

```bash
npx vercel
```

Or connect the GitHub repository to [vercel.com](https://vercel.com) for automatic deployments on every push to `main`.
