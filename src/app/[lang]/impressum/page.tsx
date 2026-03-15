import type { Metadata } from "next";
import ImprintPage from "@/components/ImprintPage";

export const metadata: Metadata = {
  title: "Impressum | Daniel Bode",
  description: "Impressum (Anbieterkennzeichnung) der Website von Daniel Bode.",
};

/** Route for the German-language imprint page (/de/impressum). */
const ImpressumPage = () => <ImprintPage />;

export default ImpressumPage;
