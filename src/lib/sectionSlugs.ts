import { Language } from "./translations";

// Maps element ID → URL slug per language
export const sectionSlugs: Record<Language, Record<string, string>> = {
  en: {
    about: "about",
    skills: "skills",
    experience: "experience",
    projects: "projects",
    education: "education",
    contact: "contact",
  },
  de: {
    about: "ueber-mich",
    skills: "kenntnisse",
    experience: "erfahrung",
    projects: "projekte",
    education: "ausbildung",
    contact: "kontakt",
  },
};

// Maps any URL slug (any language) → element ID
export const slugToSectionId: Record<string, string> = Object.fromEntries(
  Object.values(sectionSlugs).flatMap((map) =>
    Object.entries(map).map(([id, slug]) => [slug, id])
  )
);
