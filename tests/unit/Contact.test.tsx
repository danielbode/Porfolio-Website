/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "@/components/Contact";
import { LanguageProvider } from "@/lib/LanguageContext";

function renderContact() {
  return render(
    <LanguageProvider>
      <Contact />
    </LanguageProvider>
  );
}

describe("Contact", () => {
  it("renders the section heading", () => {
    renderContact();
    expect(screen.getByRole("heading", { name: /get in touch/i })).toBeInTheDocument();
  });

  it("renders LinkedIn link", () => {
    renderContact();
    const links = screen.getAllByRole("link");
    const linkedinLinks = links.filter((l) =>
      l.getAttribute("href")?.includes("linkedin.com")
    );
    expect(linkedinLinks.length).toBeGreaterThan(0);
  });

  it("renders GitHub link", () => {
    renderContact();
    const links = screen.getAllByRole("link");
    const githubLinks = links.filter((l) =>
      l.getAttribute("href")?.includes("github.com")
    );
    expect(githubLinks.length).toBeGreaterThan(0);
  });

  it("does NOT contain private email address anywhere", () => {
    const { container } = renderContact();
    expect(container.innerHTML).not.toContain("t-online.de");
    expect(container.innerHTML).not.toContain("daniel-andreas");
    expect(container.innerHTML).not.toContain("mailto:");
  });

  it("CTA button links to LinkedIn, not email", () => {
    renderContact();
    const cta = screen.getByRole("link", { name: /connect on linkedin/i });
    expect(cta).toHaveAttribute("href", "https://www.linkedin.com/in/daniel-bode-a78b70200/");
  });
});
