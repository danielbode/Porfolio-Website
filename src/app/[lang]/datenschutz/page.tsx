import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";

export const metadata: Metadata = {
  title: "Datenschutz | Daniel Bode",
  description: "Datenschutzerklärung der Website von Daniel Bode.",
};

/** Route for the German-language privacy policy page (/de/datenschutz). */
const DatenschutzPage = () => <PrivacyPage />;

export default DatenschutzPage;
