"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

/** Site footer with copyright notice and links to the privacy policy and imprint. */
const Footer = () => {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  const privacyHref = language === "de" ? "/de/datenschutz" : "/en/privacy";
  const imprintHref = language === "de" ? "/de/impressum" : "/en/imprint";

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
        <p>
          © {year} Daniel Bode. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <Link href={privacyHref} className="hover:text-gray-900 dark:hover:text-white transition-colors">
            {t.footer.privacy_policy}
          </Link>
          <Link href={imprintHref} className="hover:text-gray-900 dark:hover:text-white transition-colors">
            {t.footer.imprint}
          </Link>
          <p>{t.footer.built_with}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
