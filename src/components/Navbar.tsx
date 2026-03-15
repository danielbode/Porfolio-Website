"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { sectionSlugs } from "@/lib/sectionSlugs";
import NavMobileMenu from "@/components/NavMobileMenu";

/** Primary navigation bar with language switcher, theme toggle, and scroll-aware URL updates. */
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // useSyncExternalStore returns false on the server and true on the client,
  // preventing hydration mismatches for the theme toggle icon.
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  // Keep a ref so the IntersectionObserver closure always reads the latest language
  const languageRef = useRef(language);
  useEffect(() => {
    languageRef.current = language;
  }, [language]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const lang = languageRef.current;
            const slug = sectionSlugs[lang][id];
            const path = id === "hero" ? `/${lang}` : `/${lang}/${slug}`;
            history.replaceState(null, "", path);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return; // not on the main page — let the href navigate
    e.preventDefault();
    setMenuOpen(false);
    el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!document.getElementById("hero")) return; // not on the main page — let the href navigate
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href={`/${language}`}
          onClick={handleLogoClick}
          className="text-lg font-bold gradient-text select-none"
        >
          Daniel Bode
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`/${language}/${sectionSlugs[language][link.id]}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center text-xs font-semibold rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 transition-colors ${
                language === "en"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="w-px self-stretch bg-gray-300 dark:bg-gray-700" />
            <button
              onClick={() => setLanguage("de")}
              className={`px-2.5 py-1 transition-colors ${
                language === "de"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
              }`}
              aria-label="Switch to German"
            >
              DE
            </button>
          </div>

          {/* Theme toggle — only rendered on the client to avoid hydration mismatch */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <NavMobileMenu
          navLinks={navLinks}
          language={language}
          onNavClick={handleNavClick}
        />
      )}
    </header>
  );
};

export default Navbar;
