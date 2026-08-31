import { expect, type Page } from "@playwright/test";

/**
 * Waits until React has hydrated the page.
 *
 * The navbar's theme toggle is guarded by a `mounted` flag (see Navbar.tsx), so it
 * only ever renders on the client. Its presence is therefore proof that hydration
 * finished and event handlers are attached — without this, a click fired right
 * after `page.goto()` lands on server-rendered markup and is silently discarded.
 */
export const waitForHydration = async (page: Page) => {
  await expect(page.getByLabel("Toggle theme")).toBeVisible();
};
