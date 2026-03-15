"use client";

import { useEffect } from "react";
import { slugToSectionId } from "@/lib/sectionSlugs";

/** Headless component that scrolls the page to a section by its slug on mount. */
const ScrollToSection = ({ sectionId }: { sectionId: string }) => {
  useEffect(() => {
    const elementId = slugToSectionId[sectionId] ?? sectionId;
    const el = document.getElementById(elementId);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
    }
  }, [sectionId]);

  return null;
};

export default ScrollToSection;
