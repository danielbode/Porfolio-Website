"use client";

import { Linkedin, Github, MapPin } from "lucide-react"; // Linkedin kept for CTA button
import { useLanguage } from "@/lib/LanguageContext";

/** Contact section with info cards and a LinkedIn CTA button. */
const Contact = () => {
  const { t } = useLanguage();

  const links = [
    {
      id: "github",
      icon: Github,
      label: t.contact.github_label,
      value: "github.com/danielbode",
      href: "https://github.com/danielbode",
    },
    {
      id: "location",
      icon: MapPin,
      label: t.contact.location_label,
      value: t.contact.location_value,
      href: undefined,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900/40"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">{t.contact.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
          {links.map(({ id, icon: Icon, label, value, href }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 flex items-center gap-4"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Icon size={18} className="text-gray-500 dark:text-gray-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate block">
                    {value}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/daniel-bode-a78b70200/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
          >
            <Linkedin size={16} />
            {t.contact.send_message}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
