"use client";

import { GraduationCap, Calendar, Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/** Education section showing the university degree card with highlights and tech chips. */
const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{t.education.title}</h2>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            {/* Icon */}
            <div className="shrink-0 w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <GraduationCap size={28} className="text-gray-500 dark:text-gray-400" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {t.education.degree}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mt-0.5">
                    {t.education.university}
                  </p>
                </div>
                <div className="text-right text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <div className="flex items-center gap-1 justify-end">
                    <Calendar size={12} />
                    {t.education.period}
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <Star size={12} />
                    {t.education.grade}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {t.education.highlights}
                </h4>
                <ul className="space-y-2">
                  {t.education.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      <span className="mt-[0.55rem] w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["Angular", "TypeScript", "Spring Boot", "Java", "Unity", "C#", "ARKit", "Swift"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
