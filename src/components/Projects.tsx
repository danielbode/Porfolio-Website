"use client";

import { Github, Play, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/** Projects section displaying a grid of project cards with tech tags and links. */
const Projects = () => {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{t.projects.title}</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400">{t.projects.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Badge */}
              {"badge" in project && project.badge && (
                <span className="inline-block self-start mb-3 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  {project.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                {"link" in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink size={14} />
                    {t.projects.view_site}
                  </a>
                )}
                {"video" in project && project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Play size={14} />
                    {t.projects.view_video}
                  </a>
                )}
                {"github" in project && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github size={14} />
                    {t.projects.view_github}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
