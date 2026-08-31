"use client";

import { Github, Linkedin, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/** Hero section with name, title, and social links. */
const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-16"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Location */}
        <div className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <MapPin size={13} />
          {t.hero.based}
        </div>

        {/* Greeting */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-semibold mb-4 tracking-tight text-gray-900 dark:text-white">
          Daniel Bode
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6 tracking-tight">
          {t.hero.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
          >
            {t.hero.cta_projects}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 font-medium text-sm transition-colors"
          >
            {t.hero.cta_contact}
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/danielbode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-bode-a78b70200/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
