import { test, expect } from "@playwright/test";

test.describe("Dark / light mode toggle", () => {
  test.beforeEach(async ({ page }) => {
    // Force light mode so we have a known baseline regardless of system preference
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
  });

  test("theme toggle button is accessible", async ({ page }) => {
    const toggle = page.getByLabel("Toggle theme");
    await expect(toggle).toBeVisible();
  });

  test("clicking theme toggle switches to dark mode", async ({ page }) => {
    const toggle = page.getByLabel("Toggle theme");
    await toggle.click();
    // next-themes adds class="dark" to <html>
    await expect(page.locator("html")).toHaveClass(/dark/);
  });

  test("clicking theme toggle twice returns to light mode", async ({ page }) => {
    const toggle = page.getByLabel("Toggle theme");
    await toggle.click();
    await expect(page.locator("html")).toHaveClass(/dark/);
    await toggle.click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });
});
