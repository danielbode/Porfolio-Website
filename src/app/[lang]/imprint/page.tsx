import type { Metadata } from "next";
import ImprintPage from "@/components/ImprintPage";

export const metadata: Metadata = {
  title: "Imprint | Daniel Bode",
  description: "Legal notice (imprint) for Daniel Bode's portfolio website.",
};

/** Route for the English-language imprint page (/en/imprint). */
const ImprintRoutePage = () => <ImprintPage />;

export default ImprintRoutePage;
