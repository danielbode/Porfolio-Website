"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { PrivacyContentDE, PrivacyContentEN } from "@/components/PrivacyContent";

/** Full-page privacy policy layout — renders DE or EN content based on the active language. */
const PrivacyPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        {language === "de" ? <PrivacyContentDE /> : <PrivacyContentEN />}
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
