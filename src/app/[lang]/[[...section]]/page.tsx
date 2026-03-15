import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToSection from "@/components/ScrollToSection";

type Props = { params: Promise<{ lang: string; section?: string[] }> };

/** Generates per-language metadata for the main portfolio page. */
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { lang } = await params;
  const isDE = lang === "de";
  return {
    title: isDE ? "Daniel Bode — iOS-Entwickler" : "Daniel Bode — iOS Developer",
    description: isDE
      ? "Portfolio von Daniel Bode, iOS-Entwickler aus München. Native Swift/UIKit-Apps, Fastlane Mobile DevOps und Full-Stack-Hintergrund."
      : "Portfolio of Daniel Bode, iOS Developer based in Munich. Native Swift/UIKit apps, Fastlane mobile DevOps, and a full-stack background.",
  };
};

/** Main portfolio page — assembles all section components and handles scroll-to-section. */
const Home = async ({ params }: Props) => {
  const { section } = await params;
  const sectionId = section?.[0];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {sectionId && <ScrollToSection sectionId={sectionId} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
