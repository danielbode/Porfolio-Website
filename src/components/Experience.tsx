"use client";

import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/** Experience section rendered as a vertical timeline of job cards. */
const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.experience.title}</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400">{t.experience.subtitle}</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          <div className="space-y-10">
            {t.experience.jobs.map((job, idx) => (
              <div key={idx} className="relative flex gap-6 sm:gap-10">
                {/* Timeline dot */}
                <div className="shrink-0 w-12 sm:w-16 flex justify-center">
                  <div className="mt-1 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-gray-950 shadow-lg" />
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                            {job.company}
                          </span>
                          {"link" in job && job.link && (
                            <a
                              href={job.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-indigo-500 transition-colors"
                              aria-label="View project"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="text-right text-xs text-gray-500 dark:text-gray-400 space-y-1">
                        <div className="flex items-center gap-1 justify-end">
                          <Calendar size={12} />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <MapPin size={12} />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-5">
                      {job.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          <span className="text-indigo-500 mt-0.5 shrink-0 leading-none">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
