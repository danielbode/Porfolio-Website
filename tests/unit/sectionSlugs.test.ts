import { sectionSlugs, slugToSectionId } from "@/lib/sectionSlugs";

describe("sectionSlugs", () => {
  const sectionIds = ["about", "skills", "experience", "projects", "education", "contact"];

  it("EN and DE define the same section IDs", () => {
    expect(Object.keys(sectionSlugs.en).sort()).toEqual(Object.keys(sectionSlugs.de).sort());
  });

  it("every section ID has a non-empty slug in both languages", () => {
    sectionIds.forEach((id) => {
      expect(sectionSlugs.en[id]?.trim()).not.toBe("");
      expect(sectionSlugs.de[id]?.trim()).not.toBe("");
    });
  });

  it("EN slugs match their section IDs (English slugs are identity-mapped)", () => {
    sectionIds.forEach((id) => {
      expect(sectionSlugs.en[id]).toBe(id);
    });
  });

  it("DE slugs differ from EN slugs (German uses translated slugs)", () => {
    sectionIds.forEach((id) => {
      expect(sectionSlugs.de[id]).not.toBe(id);
    });
  });
});

describe("slugToSectionId", () => {
  it("resolves every EN slug back to its section ID", () => {
    Object.entries(sectionSlugs.en).forEach(([id, slug]) => {
      expect(slugToSectionId[slug]).toBe(id);
    });
  });

  it("resolves every DE slug back to its section ID", () => {
    Object.entries(sectionSlugs.de).forEach(([id, slug]) => {
      expect(slugToSectionId[slug]).toBe(id);
    });
  });

  it("returns undefined for unknown slugs", () => {
    expect(slugToSectionId["nonexistent"]).toBeUndefined();
  });
});
