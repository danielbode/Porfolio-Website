"use client";

import Image from "next/image";
import { MapPin, Linkedin, Globe, GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/** About section with profile photo, details list, and biography paragraphs. */
const About = () => {
  const { t } = useLanguage();

  const details = [
    { id: "location", icon: MapPin, label: t.about.location, href: undefined },
    {
      id: "linkedin",
      icon: Linkedin,
      label: t.about.linkedin,
      href: "https://www.linkedin.com/in/daniel-bode-a78b70200/",
    },
    { id: "languages", icon: Globe, label: t.about.languages, href: undefined },
    { id: "university", icon: GraduationCap, label: t.about.university, href: undefined },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{t.about.title}</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Avatar column */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
            <div className="w-48 h-48 rounded-2xl overflow-hidden relative ring-1 ring-gray-200 dark:ring-gray-800">
              <Image
                src="/photo.jpg"
                alt="Daniel Bode"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Detail list */}
            <ul className="space-y-3 w-full">
              {details.map(({ id, icon: Icon, label, href }) => (
                <li key={id} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Icon size={16} className="mt-0.5 shrink-0 text-gray-400 dark:text-gray-500" />
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Text column */}
          <div className="lg:col-span-3 space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed text-base">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
