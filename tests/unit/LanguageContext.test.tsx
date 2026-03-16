/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";

/** Test component that exposes context values. */
const LanguageDisplay = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="nav-about">{t.nav.about}</span>
      <button onClick={() => setLanguage("de")}>switch-de</button>
      <button onClick={() => setLanguage("en")}>switch-en</button>
    </div>
  );
};

describe("LanguageContext", () => {
  it("defaults to English", () => {
    render(
      <LanguageProvider>
        <LanguageDisplay />
      </LanguageProvider>
    );
    expect(screen.getByTestId("lang")).toHaveTextContent("en");
    expect(screen.getByTestId("nav-about")).toHaveTextContent("About");
  });

  it("respects initialLang prop", () => {
    render(
      <LanguageProvider initialLang="de">
        <LanguageDisplay />
      </LanguageProvider>
    );
    expect(screen.getByTestId("lang")).toHaveTextContent("de");
    expect(screen.getByTestId("nav-about")).toHaveTextContent("Über mich");
  });

  it("switches language and updates translations", () => {
    render(
      <LanguageProvider>
        <LanguageDisplay />
      </LanguageProvider>
    );
    fireEvent.click(screen.getByText("switch-de"));
    expect(screen.getByTestId("lang")).toHaveTextContent("de");
    expect(screen.getByTestId("nav-about")).toHaveTextContent("Über mich");

    fireEvent.click(screen.getByText("switch-en"));
    expect(screen.getByTestId("lang")).toHaveTextContent("en");
    expect(screen.getByTestId("nav-about")).toHaveTextContent("About");
  });

  it("throws when useLanguage is used outside LanguageProvider", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<LanguageDisplay />)).toThrow(
      "useLanguage must be used within a LanguageProvider"
    );
    spy.mockRestore();
  });
});
