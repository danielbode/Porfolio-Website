import { test, expect } from "@playwright/test";

test.describe("Homepage — layout and content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page title is correct", async ({ page }) => {
    await expect(page).toHaveTitle(/Daniel Bode/);
  });

  test("hero name is visible", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Daniel Bode");
  });

  test("hero title shows iOS Developer", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 2 }).first()).toContainText("iOS Developer");
  });

  test("private email is not present anywhere on the page", async ({ page }) => {
    const content = await page.content();
    expect(content).not.toContain("t-online.de");
    expect(content).not.toContain("daniel-andreas.bode");
  });

  test("all main sections are present", async ({ page }) => {
    for (const id of ["about", "skills", "experience", "projects", "education", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("GitHub link is present and correct", async ({ page }) => {
    const githubLinks = page.getByRole("link", { name: /github/i });
    await expect(githubLinks.first()).toHaveAttribute("href", "https://github.com/danielbode");
  });

  test("LinkedIn link is present", async ({ page }) => {
    const linkedinLinks = page.getByRole("link", { name: /linkedin/i });
    await expect(linkedinLinks.first()).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/daniel-bode-a78b70200/"
    );
  });

  test("no mailto links exist (email is private)", async ({ page }) => {
    const mailtoLinks = page.locator('a[href^="mailto:"]');
    await expect(mailtoLinks).toHaveCount(0);
  });
});
