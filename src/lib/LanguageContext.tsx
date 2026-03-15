"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language, translations } from "./translations";
import { slugToSectionId, sectionSlugs } from "./sectionSlugs";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** Provides language state and translation helpers to the component tree. */
export const LanguageProvider = ({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: Language;
}) => {
  const [language, setLanguageState] = useState<Language>(initialLang);
  const t = translations[language];

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Keep the current section segment, just swap the language prefix
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const section = pathParts[1]; // e.g. "projects", or undefined at root
    // Map slugs to the new language (legal pages + main sections)
    const legalSlugMap: Record<string, string> = {
      impressum: lang === "en" ? "imprint" : "impressum",
      imprint: lang === "de" ? "impressum" : "imprint",
      datenschutz: lang === "en" ? "privacy" : "datenschutz",
      privacy: lang === "de" ? "datenschutz" : "privacy",
    };
    let mappedSection: string | undefined;
    if (section) {
      if (legalSlugMap[section]) {
        mappedSection = legalSlugMap[section];
      } else {
        // Try resolving as a section slug and re-mapping to new language
        const sectionId = slugToSectionId[section];
        mappedSection = sectionId ? sectionSlugs[lang][sectionId] : section;
      }
    }
    const newPath = mappedSection ? `/${lang}/${mappedSection}` : `/${lang}`;
    history.replaceState(null, "", newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Returns the current language, setter, and translation object from the nearest LanguageProvider. */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
