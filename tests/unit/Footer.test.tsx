/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

jest.mock("next/link", () => {
  const MockLink = ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>{children}</a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

function renderFooter(lang: "en" | "de" = "en") {
  return render(
    <LanguageProvider initialLang={lang}>
      <Footer />
    </LanguageProvider>
  );
}

describe("Footer", () => {
  it("renders the copyright notice with current year", () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });

  it("links to EN legal pages when language is English", () => {
    renderFooter("en");
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/en/privacy");
    expect(hrefs).toContain("/en/imprint");
  });

  it("links to DE legal pages when language is German", () => {
    renderFooter("de");
    const links = screen.getAllByRole("link");
    const hrefs = links.map((l) => l.getAttribute("href"));
    expect(hrefs).toContain("/de/datenschutz");
    expect(hrefs).toContain("/de/impressum");
  });
});
