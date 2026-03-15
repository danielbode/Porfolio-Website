/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";
import { LanguageProvider } from "@/lib/LanguageContext";

function renderHero() {
  return render(
    <LanguageProvider>
      <Hero />
    </LanguageProvider>
  );
}

describe("Hero", () => {
  it("displays the developer name", () => {
    renderHero();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Daniel Bode");
  });

  it("displays iOS Developer as title in English", () => {
    renderHero();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("iOS Developer");
  });

  it("renders the location badge", () => {
    renderHero();
    expect(screen.getByText(/Munich/i)).toBeInTheDocument();
  });

  it("renders GitHub social link", () => {
    renderHero();
    const githubLink = screen.getByLabelText("GitHub");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/danielbode");
  });

  it("renders LinkedIn social link", () => {
    renderHero();
    const linkedinLink = screen.getByLabelText("LinkedIn");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/daniel-bode-a78b70200/"
    );
  });

  it("does NOT render a mailto link (email is private)", () => {
    renderHero();
    const emailLink = screen.queryByLabelText("Email");
    expect(emailLink).not.toBeInTheDocument();
  });

  it("does NOT expose the private email address in the DOM", () => {
    const { container } = renderHero();
    expect(container.innerHTML).not.toContain("t-online.de");
    expect(container.innerHTML).not.toContain("daniel-andreas");
  });

  it("renders 'View Projects' CTA", () => {
    renderHero();
    expect(screen.getByRole("link", { name: /view projects/i })).toHaveAttribute(
      "href",
      "#projects"
    );
  });

  it("renders 'Get in Touch' CTA", () => {
    renderHero();
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute(
      "href",
      "#contact"
    );
  });
});
