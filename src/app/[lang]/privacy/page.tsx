import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Daniel Bode",
  description: "Privacy policy for Daniel Bode's portfolio website.",
};

/** Route for the English-language privacy policy page (/en/privacy). */
const PrivacyRoutePage = () => <PrivacyPage />;

export default PrivacyRoutePage;
