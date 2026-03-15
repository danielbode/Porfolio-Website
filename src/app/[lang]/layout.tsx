import { LanguageProvider } from "@/lib/LanguageContext";
import { Language } from "@/lib/translations";
import { ReactNode } from "react";

/** Language layout — initialises the LanguageProvider from the [lang] URL segment. */
const LangLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  const initialLang: Language = lang === "de" ? "de" : "en";

  return (
    <LanguageProvider initialLang={initialLang}>
      {children}
    </LanguageProvider>
  );
};

export default LangLayout;
