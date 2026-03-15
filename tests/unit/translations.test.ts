import { translations } from "@/lib/translations";

describe("translations", () => {
  const languages = ["en", "de"] as const;

  describe("completeness — all keys exist in both languages", () => {
    const enKeys = Object.keys(translations.en);
    const deKeys = Object.keys(translations.de);

    it("both languages have the same top-level sections", () => {
      expect(enKeys.sort()).toEqual(deKeys.sort());
    });

    it("nav section has identical keys in EN and DE", () => {
      expect(Object.keys(translations.en.nav).sort()).toEqual(
        Object.keys(translations.de.nav).sort()
      );
    });

    it("hero section has identical keys in EN and DE", () => {
      expect(Object.keys(translations.en.hero).sort()).toEqual(
        Object.keys(translations.de.hero).sort()
      );
    });

    it("skills.categories has identical keys in EN and DE", () => {
      expect(Object.keys(translations.en.skills.categories).sort()).toEqual(
        Object.keys(translations.de.skills.categories).sort()
      );
    });

    it("experience has the same number of jobs in EN and DE", () => {
      expect(translations.en.experience.jobs.length).toBe(
        translations.de.experience.jobs.length
      );
    });

    it("projects have the same number of items in EN and DE", () => {
      expect(translations.en.projects.items.length).toBe(
        translations.de.projects.items.length
      );
    });

    it("education section has identical keys in EN and DE", () => {
      expect(Object.keys(translations.en.education).sort()).toEqual(
        Object.keys(translations.de.education).sort()
      );
    });
  });

  describe("content — no empty strings", () => {
    languages.forEach((lang) => {
      it(`[${lang}] nav labels are non-empty`, () => {
        Object.values(translations[lang].nav).forEach((v) => {
          expect(v.trim()).not.toBe("");
        });
      });

      it(`[${lang}] hero fields are non-empty`, () => {
        Object.values(translations[lang].hero).forEach((v) => {
          expect(v.trim()).not.toBe("");
        });
      });

      it(`[${lang}] project items have name and description`, () => {
        translations[lang].projects.items.forEach((item) => {
          expect(item.name.trim()).not.toBe("");
          expect(item.description.trim()).not.toBe("");
          expect(item.tech.length).toBeGreaterThan(0);
        });
      });

      it(`[${lang}] experience jobs have role and company`, () => {
        translations[lang].experience.jobs.forEach((job) => {
          expect(job.role.trim()).not.toBe("");
          expect(job.company.trim()).not.toBe("");
          expect(job.bullets.length).toBeGreaterThan(0);
          expect(job.tech.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe("privacy — private email not exposed", () => {
    languages.forEach((lang) => {
      it(`[${lang}] contact section does not contain private email`, () => {
        const contactStr = JSON.stringify(translations[lang].contact);
        expect(contactStr).not.toContain("@t-online.de");
        expect(contactStr).not.toContain("daniel-andreas");
      });

      it(`[${lang}] hero section does not contain private email`, () => {
        const heroStr = JSON.stringify(translations[lang].hero);
        expect(heroStr).not.toContain("@t-online.de");
      });
    });
  });

  describe("content focus — iOS is primary", () => {
    it("EN hero title references iOS Developer", () => {
      expect(translations.en.hero.title.toLowerCase()).toContain("ios");
    });

    it("DE hero title references iOS", () => {
      expect(translations.de.hero.title.toLowerCase()).toContain("ios");
    });

    it("current job (first experience) is iOS-related", () => {
      expect(translations.en.experience.jobs[0].tech).toContain("Swift");
      expect(translations.en.experience.jobs[0].tech).toContain("UIKit");
      expect(translations.en.experience.jobs[0].tech).toContain("Fastlane");
    });

    it("skills categories include iOS and Mobile DevOps", () => {
      const categories = Object.keys(translations.en.skills.categories);
      expect(categories).toContain("ios");
      expect(categories).toContain("mobileDevops");
    });
  });
});
