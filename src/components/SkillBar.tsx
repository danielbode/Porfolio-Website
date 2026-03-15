export type SkillLevel = 1 | 2 | 3 | 4;

export const levelLabel: Record<SkillLevel, { en: string; de: string }> = {
  1: { en: "Familiar", de: "Grundkenntnisse" },
  2: { en: "Proficient", de: "Fortgeschritten" },
  3: { en: "Advanced", de: "Erfahren" },
  4: { en: "Expert", de: "Experte" },
};

interface SkillBarProps {
  name: string;
  level: SkillLevel;
  lang: "en" | "de";
}

/** Renders a labelled 4-segment progress bar representing a single skill's proficiency. */
const SkillBar = ({ name, level, lang }: SkillBarProps) => (
  <div>
    <div className="flex items-center justify-between mb-1.5">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
      <span className="text-xs text-gray-400 dark:text-gray-500">{levelLabel[level][lang]}</span>
    </div>
    <div className="flex gap-1">
      {([1, 2, 3, 4] as SkillLevel[]).map((seg) => (
        <div
          key={seg}
          className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
            seg <= level
              ? "bg-gradient-to-r from-indigo-500 to-cyan-500"
              : "bg-gray-200 dark:bg-gray-800"
          }`}
        />
      ))}
    </div>
  </div>
);

export default SkillBar;
