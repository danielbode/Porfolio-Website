"use client";

import { useLanguage } from "@/lib/LanguageContext";
import SkillBar, { SkillLevel, levelLabel } from "@/components/SkillBar";

const skillGroups = [
  {
    key: "ios" as const,
    skills: [
      { name: "Swift", level: 3 as SkillLevel },
      { name: "UIKit", level: 3 as SkillLevel },
      { name: "Xcode", level: 3 as SkillLevel },
      { name: "ARKit / ARCore", level: 3 as SkillLevel },
      { name: "SwiftUI", level: 2 as SkillLevel },
      { name: "WebRTC (iOS)", level: 2 as SkillLevel },
    ],
  },
  {
    key: "mobileDevops" as const,
    skills: [
      { name: "Fastlane", level: 4 as SkillLevel },
      { name: "App Store Connect", level: 3 as SkillLevel },
      { name: "Code Signing", level: 3 as SkillLevel },
      { name: "White-label Distribution", level: 3 as SkillLevel },
      { name: "CI/CD for iOS", level: 3 as SkillLevel },
    ],
  },
  {
    key: "fullstack" as const,
    skills: [
      { name: "TypeScript / JavaScript", level: 3 as SkillLevel },
      { name: "Angular", level: 3 as SkillLevel },
      { name: "HTML / CSS", level: 3 as SkillLevel },
      { name: "React", level: 2 as SkillLevel },
    ],
  },
  {
    key: "backend" as const,
    skills: [
      { name: "REST APIs", level: 4 as SkillLevel },
      { name: "Node.js & Express", level: 3 as SkillLevel },
      { name: "Spring Boot", level: 3 as SkillLevel },
      { name: "Jakarta EE", level: 2 as SkillLevel },
      { name: "WebSockets", level: 2 as SkillLevel },
    ],
  },
  {
    key: "databases" as const,
    skills: [
      { name: "SQL", level: 3 as SkillLevel },
      { name: "PostgreSQL", level: 3 as SkillLevel },
      { name: "MySQL", level: 3 as SkillLevel },
      { name: "Oracle", level: 3 as SkillLevel },
    ],
  },
  {
    key: "devtools" as const,
    skills: [
      { name: "Git", level: 4 as SkillLevel },
      { name: "Scrum / Agile", level: 4 as SkillLevel },
      { name: "Docker", level: 3 as SkillLevel },
      { name: "Jira / Confluence", level: 3 as SkillLevel },
      { name: "Kubernetes", level: 2 as SkillLevel },
    ],
  },
];

/** Skills section displaying grouped proficiency bars and a level legend. */
const Skills = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.skills.title}</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400">{t.skills.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.key}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-5">
                {t.skills.categories[group.key]}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} lang={language} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
          {([1, 2, 3, 4] as SkillLevel[]).map((level) => (
            <div key={level} className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {([1, 2, 3, 4] as SkillLevel[]).map((seg) => (
                  <div
                    key={seg}
                    className={`w-4 h-1.5 rounded-full ${
                      seg <= level
                        ? "bg-gradient-to-r from-indigo-500 to-cyan-500"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {levelLabel[level][language]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
