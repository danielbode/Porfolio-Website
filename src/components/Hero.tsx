"use client";

import { Github, Linkedin, MapPin, ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/** Hero section with name, title, social links, and scroll indicator. */
const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-3xl mx-auto">
        {/* Location badge */}
        <div className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-6 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <MapPin size={13} />
          {t.hero.based}
        </div>

        {/* Greeting */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2 font-medium">
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 tracking-tight">
          <span className="gradient-text">Daniel Bode</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
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
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-500/25"
          >
            {t.hero.cta_projects}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-sm transition-colors"
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
            className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-bode-a78b70200/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 dark:text-gray-600">
        <ArrowDown size={20} />
      </div>
    </section>
  );
}

export default Hero;
