"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

interface ContactFormProps {
  lang: "de" | "en";
}

/** Contact form using Formspree, rendered in the imprint page. */
function ContactForm({ lang }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const labels = {
    de: {
      heading: "Kontaktformular",
      name: "Name",
      email: "E-Mail-Adresse",
      message: "Nachricht",
      submit: "Absenden",
      submitting: "Wird gesendet…",
      success: "Vielen Dank! Ihre Nachricht wurde gesendet.",
      error: "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    },
    en: {
      heading: "Contact Form",
      name: "Name",
      email: "Email address",
      message: "Message",
      submit: "Send",
      submitting: "Sending…",
      success: "Thank you! Your message has been sent.",
      error: "Something went wrong. Please try again.",
    },
  }[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/xaqpbokb", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">{labels.heading}</h2>
      {status === "success" ? (
        <p className="text-green-600 dark:text-green-400">{labels.success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {labels.name}
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {labels.email}
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {labels.message}
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>
          {status === "error" && (
            <p className="text-red-600 dark:text-red-400 text-sm">{labels.error}</p>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium transition-colors"
          >
            {status === "submitting" ? labels.submitting : labels.submit}
          </button>
        </form>
      )}
    </section>
  );
}

function ContentDE() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Impressum</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Angaben gemäß § 5 TMG</p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Diensteanbieter</h2>
        <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed">
          Daniel Bode<br />
          c/o flexdienst – #20532<br />
          Kurt-Schumacher-Straße 76<br />
          67663 Kaiserslautern<br />
          Deutschland
        </address>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Kontaktmöglichkeiten</h2>
        <dl className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-1 mb-6">
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-medium">E-Mail-Adresse:</dt>
            <dd>
              <a href="mailto:info@danielbode.me" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@danielbode.me
              </a>
            </dd>
          </div>
        </dl>
        <ContactForm lang="de" />
      </section>

    </>
  );
}

function ContentEN() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Legal Notice (Imprint)</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
        Information pursuant to § 5 TMG (German Telemedia Act)
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Service Provider</h2>
        <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed">
          Daniel Bode<br />
          c/o flexdienst – #20532<br />
          Kurt-Schumacher-Straße 76<br />
          67663 Kaiserslautern<br />
          Germany
        </address>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Contact Options</h2>
        <dl className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-1 mb-6">
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-medium">Email address:</dt>
            <dd>
              <a href="mailto:info@danielbode.me" className="text-blue-600 dark:text-blue-400 hover:underline">
                info@danielbode.me
              </a>
            </dd>
          </div>
        </dl>
        <ContactForm lang="en" />
      </section>

    </>
  );
}

/** Full-page legal notice (imprint) layout — renders DE or EN content based on the active language. */
const ImprintPage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        {language === "de" ? <ContentDE /> : <ContentEN />}
      </main>
      <Footer />
    </div>
  );
};

export default ImprintPage;
