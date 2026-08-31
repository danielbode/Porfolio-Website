import { test, expect, type Page } from "@playwright/test";

/** Opens the mobile menu if the viewport collapsed the nav into a hamburger. */
const revealNavLinks = async (page: Page) => {
  const hamburger = page.getByLabel("Toggle menu");
  if (await hamburger.isVisible()) {
    await hamburger.click();
  }
};

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("logo link points to the language root", async ({ page }) => {
    await expect(page.locator('a[href="/en"]').first()).toBeVisible();
  });

  // Nav links use language-prefixed slugs (see src/lib/sectionSlugs.ts).
  // On desktop they sit in the nav; on mobile they only exist once the menu is open.
  const sections = ["about", "skills", "experience", "projects", "education", "contact"];

  for (const id of sections) {
    test(`nav contains a link to /en/${id}`, async ({ page }) => {
      await revealNavLinks(page);
      // Both navs are in the DOM; :visible picks whichever one the viewport shows.
      await expect(page.locator(`a[href="/en/${id}"]:visible`).first()).toBeVisible();
    });
  }

  test("hamburger opens mobile menu with nav links", async ({ page }) => {
    const hamburger = page.getByLabel("Toggle menu");
    // If hamburger is visible we're on mobile
    if (await hamburger.isVisible()) {
      await hamburger.click();
      await expect(page.getByRole("link", { name: "About" })).toBeVisible();
      await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
    }
  });

  test("'View Projects' CTA points to #projects", { tag: "@smoke" }, async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /view projects/i })
    ).toHaveAttribute("href", "#projects");
  });

  test("'Get in Touch' CTA points to #contact", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /get in touch/i })
    ).toHaveAttribute("href", "#contact");
  });
});
