/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/lib/LanguageContext";

jest.mock("next-themes", () => ({
  useTheme: () => ({ resolvedTheme: "light", setTheme: jest.fn() }),
}));

function renderNavbar(lang: "en" | "de" = "en") {
  return render(
    <LanguageProvider initialLang={lang}>
      <Navbar />
    </LanguageProvider>
  );
}

describe("Navbar", () => {
  it("renders the site logo", () => {
    renderNavbar();
    expect(screen.getByText("Daniel Bode")).toBeInTheDocument();
  });

  it("renders both language switcher buttons", () => {
    renderNavbar();
    expect(screen.getByLabelText("Switch to English")).toBeInTheDocument();
    expect(screen.getByLabelText("Switch to German")).toBeInTheDocument();
  });

  it("renders the theme toggle button", () => {
    renderNavbar();
    expect(screen.getByLabelText("Toggle theme")).toBeInTheDocument();
  });

  it("shows EN nav links by default", () => {
    renderNavbar();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("switches to DE nav labels after clicking DE button", () => {
    renderNavbar();
    fireEvent.click(screen.getByLabelText("Switch to German"));
    expect(screen.getByText("Über mich")).toBeInTheDocument();
    expect(screen.getByText("Kenntnisse")).toBeInTheDocument();
    expect(screen.getByText("Erfahrung")).toBeInTheDocument();
    expect(screen.getByText("Projekte")).toBeInTheDocument();
    expect(screen.getByText("Ausbildung")).toBeInTheDocument();
    expect(screen.getByText("Kontakt")).toBeInTheDocument();
  });

  it("renders DE nav labels when initialised in German", () => {
    renderNavbar("de");
    expect(screen.getByText("Über mich")).toBeInTheDocument();
    expect(screen.getByText("Kontakt")).toBeInTheDocument();
  });

  it("renders the mobile menu toggle button", () => {
    renderNavbar();
    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
  });
});
