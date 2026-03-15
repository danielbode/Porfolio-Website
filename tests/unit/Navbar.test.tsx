/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/lib/LanguageContext";

// next-themes requires a DOM and has internal state — mock it minimally
jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: jest.fn() }),
}));

function renderNavbar() {
  return render(
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}

describe("Navbar", () => {
  it("renders the site logo", () => {
    renderNavbar();
    expect(screen.getByText("Daniel Bode")).toBeInTheDocument();
  });

  it("renders the language toggle button", () => {
    renderNavbar();
    expect(screen.getByLabelText("Toggle language")).toBeInTheDocument();
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

  it("switches to DE nav labels after toggling language", () => {
    renderNavbar();
    const toggle = screen.getByLabelText("Toggle language");
    fireEvent.click(toggle);
    expect(screen.getByText("Über mich")).toBeInTheDocument();
    expect(screen.getByText("Kenntnisse")).toBeInTheDocument();
    expect(screen.getByText("Erfahrung")).toBeInTheDocument();
    expect(screen.getByText("Projekte")).toBeInTheDocument();
    expect(screen.getByText("Ausbildung")).toBeInTheDocument();
    expect(screen.getByText("Kontakt")).toBeInTheDocument();
  });

  it("language button label flips after toggle (DE → shows EN, EN → shows DE)", () => {
    renderNavbar();
    const toggle = screen.getByLabelText("Toggle language");
    // Initially in EN — button shows "DE" (to switch to DE)
    expect(toggle).toHaveTextContent("DE");
    fireEvent.click(toggle);
    // Now in DE — button shows "EN" (to switch back)
    expect(toggle).toHaveTextContent("EN");
  });
});
