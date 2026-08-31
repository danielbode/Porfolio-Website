import { test, expect } from "@playwright/test";

test.describe("Language toggle (EN ↔ DE)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("both language buttons are visible", async ({ page }) => {
    await expect(page.getByLabel("Switch to English")).toBeVisible();
    await expect(page.getByLabel("Switch to German")).toBeVisible();
  });

  test("default language is English", async ({ page }) => {
    await expect(page).toHaveURL(/\/en(\/|$)/);
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Developer");
  });

  test("switching to German changes hero title", { tag: "@smoke" }, async ({ page }) => {
    await page.getByLabel("Switch to German").click();
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Entwickler");
  });

  test("switching to German remaps nav slugs", async ({ page }) => {
    await page.getByLabel("Switch to German").click();
    // English slug is replaced by its German equivalent (see src/lib/sectionSlugs.ts)
    const hamburger = page.getByLabel("Toggle menu");
    if (await hamburger.isVisible()) {
      await hamburger.click();
    }
    await expect(page.locator('a[href="/de/ueber-mich"]:visible').first()).toBeVisible();
    await expect(page.locator('a[href="/en/about"]')).toHaveCount(0);
  });

  test("switching back to English restores English labels", async ({ page }) => {
    await page.getByLabel("Switch to German").click();
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Entwickler");
    await page.getByLabel("Switch to English").click();
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Developer");
  });

  test("German version does not expose private email", async ({ page }) => {
    await page.getByLabel("Switch to German").click();
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Entwickler");
    const content = await page.content();
    expect(content).not.toContain("t-online.de");
  });
});
