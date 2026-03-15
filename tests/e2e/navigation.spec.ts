import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("logo link has href pointing to root", async ({ page }) => {
    const logoLink = page.locator('a[href="#"]').first();
    await expect(logoLink).toBeVisible();
  });

  // Check nav links exist in the DOM (desktop: visible in nav; mobile: inside hidden menu)
  const sections: Array<{ id: string }> = [
    { id: "about" },
    { id: "skills" },
    { id: "experience" },
    { id: "projects" },
    { id: "education" },
    { id: "contact" },
  ];

  for (const { id } of sections) {
    test(`nav contains a link to #${id}`, async ({ page }) => {
      // The link exists somewhere in the nav (desktop visible or mobile hidden)
      const link = page.locator(`a[href="#${id}"]`).first();
      await expect(link).toHaveAttribute("href", `#${id}`);
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

  test("'View Projects' CTA points to #projects", async ({ page }) => {
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
