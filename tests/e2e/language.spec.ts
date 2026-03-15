import { test, expect } from "@playwright/test";

test.describe("Language toggle (EN ↔ DE)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("language toggle button is visible", async ({ page }) => {
    await expect(page.getByLabel("Toggle language")).toBeVisible();
  });

  test("default language is English", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Developer");
    await expect(page.getByLabel("Toggle language")).toHaveText("DE");
  });

  test("switching to German changes hero title", async ({ page }) => {
    await page.getByLabel("Toggle language").click();
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Entwickler");
  });

  test("switching to German changes nav labels", async ({ page }) => {
    await page.getByLabel("Toggle language").click();
    // Use CSS href selectors — works on both desktop (visible) and mobile (menu closed)
    await expect(page.locator('a[href="#about"]').first()).toHaveAttribute("href", "#about");
    // Hero heading is the most reliable DE indicator
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Entwickler");
  });

  test("switching back to English restores English labels", async ({ page }) => {
    const toggle = page.getByLabel("Toggle language");
    await toggle.click(); // → DE
    await toggle.click(); // → EN
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Developer");
  });

  test("German version does not expose private email", async ({ page }) => {
    await page.getByLabel("Toggle language").click();
    const content = await page.content();
    expect(content).not.toContain("t-online.de");
  });
});
