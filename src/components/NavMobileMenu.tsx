"use client";

import { sectionSlugs } from "@/lib/sectionSlugs";
import type { Language } from "@/lib/translations";

interface NavLink {
  id: string;
  label: string;
}

interface NavMobileMenuProps {
  navLinks: NavLink[];
  language: Language;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

/** Dropdown mobile navigation menu rendered below the navbar. */
const NavMobileMenu = ({ navLinks, language, onNavClick }: NavMobileMenuProps) => (
  <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 py-4">
    <ul className="flex flex-col gap-3">
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`/${language}/${sectionSlugs[language][link.id]}`}
            onClick={(e) => onNavClick(e, link.id)}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavMobileMenu;
