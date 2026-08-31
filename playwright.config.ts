import { defineConfig, devices } from "@playwright/test";

// When set, tests run against an already-deployed URL (the CI smoke-test job
// points this at the Vercel staging deployment) instead of a local dev server.
const externalURL = process.env.PLAYWRIGHT_BASE_URL;

// Vercel protects preview deployments behind an auth wall; this header lets
// automation through. Only sent when the secret is actually configured.
const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "list",
  use: {
    baseURL: externalURL ?? "http://localhost:3000",
    trace: "on-first-retry",
    extraHTTPHeaders: bypassSecret ? { "x-vercel-protection-bypass": bypassSecret } : {},
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 7"] }, // uses Chromium — no extra browser install needed
    },
  ],
  // Skipped entirely when testing against a deployed URL.
  webServer: externalURL
    ? undefined
    : {
        command: "npm run dev",
        url: "http://localhost:3000",
        reuseExistingServer: true,
        timeout: 120_000,
      },
});
