export type Language = "en" | "de";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "iOS Developer",
      subtitle:
        "Building native iOS apps with Swift, UIKit & SwiftUI, automating App Store pipelines with Fastlane, and bringing a solid full-stack background to mobile.",
      cta_projects: "View Projects",
      cta_contact: "Get in Touch",
      based: "Based in Munich, Germany",
    },
    about: {
      title: "About Me",
      p1: "I'm an iOS Developer at a Munich-based FinTech company, building production apps used daily by wealth management firms and their clients across Germany and Austria. My primary framework is UIKit, complemented by growing experience in SwiftUI. I hold a B.Sc. in Information Systems from the Technical University of Munich.",
      p2: "My main project is the company's flagship wealth management platform — a hybrid iOS app that wraps a complex financial web application in a carefully engineered native shell. This architecture lets advisors manage client portfolios across accounts, ETFs, hedge funds, and bonds aggregated from multiple banks, communicate via in-app messaging, email, SMS, and MiFID-compliant recorded video calls, and maintain detailed client records — while I ensure the experience feels genuinely native through Face ID, Keychain, push notifications, and deep linking. I also develop the company's fully native UIKit multi-factor authentication app, giving users a secure in-app alternative to SMS-based login.",
      p3: "On the DevOps side, I own the entire release pipeline for 65+ individually branded white-label apps — each published under its own App Store account with a custom icon, color scheme, and name. Using Fastlane, I automate every step: building, code signing, uploading to App Store Connect, managing per-app metadata, submitting for review, and triggering releases. I also bring a solid full-stack background from working with Angular, Spring Boot, Node.js, and Docker — giving me a broad perspective when bridging mobile and backend systems.",
      location: "Munich, Germany",
      languages: "German (native), English (proficient)",
      university: "TU Munich, B.Sc. Information Systems",
      linkedin: "linkedin.com/in/daniel-bode-a78b70200",
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Primary focus on iOS — with a full-stack and mobile DevOps background",
      categories: {
        ios: "iOS Development",
        mobileDevops: "Mobile DevOps",
        fullstack: "Full Stack",
        backend: "Backend & APIs",
        databases: "Databases",
        devtools: "Dev Tools & Agile",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      jobs: [
        {
          company: "TecKonzept",
          role: "iOS Developer",
          period: "Apr 2025 – Present",
          location: "Haar, Munich",
          link: "https://www.fondskonzept.ag/",
          bullets: [
            "Developing two production iOS apps in Swift and UIKit: a hybrid wealth management platform used by financial advisors and their clients, and a fully native multi-factor authentication app.",
            "Engineering the native iOS shell around the company's core FinTech web application — integrating Face ID, Keychain, push notifications, and deep linking so a complex financial platform feels genuinely native on iPhone.",
            "Building the MFA app entirely in UIKit, providing users with secure in-app approval requests as an alternative to SMS-based login codes.",
            "Owning the end-to-end release pipeline for 65+ white-label apps with Fastlane — automating per-target builds, code signing, App Store Connect uploads, per-app metadata, review submissions, and releases.",
          ],
          tech: ["UIKit", "Swift", "Fastlane", "Xcode", "App Store Connect", "CI/CD"],
        },
        {
          company: "Technical University of Munich",
          role: "Full Stack Developer — Volunteer",
          period: "Jul 2022 – Apr 2023",
          location: "Garching",
          link: "https://artemisapp.github.io/",
          bullets: [
            "Contributed to Artemis, an open-source educational platform used by thousands of students.",
            "Improved and optimized the notification system to increase user engagement.",
            "Implemented learning analytics features supporting adaptive learning paths and progress tracking.",
            "Reviewed pull requests and maintained code quality standards.",
          ],
          tech: ["Angular", "TypeScript", "Spring Boot", "Java", "WebSockets", "PostgreSQL", "MySQL"],
        },
        {
          company: "Siemens",
          role: "Full Stack Developer — Working Student",
          period: "Apr 2019 – Sep 2022",
          location: "Munich",
          link: "https://www.siemens-energy.com/global/en/home/products-services/product-offerings/overheadline-solutions/line-digitalization.html",
          bullets: [
            "Developed the full-stack operator platform for SIEAERO — a drone-based overhead power line inspection system that captures RGB, infrared, UV, and 3D point-cloud data to feed an AI defect-detection pipeline.",
            "Built the complete data ingestion and results review workflow: operators upload drone data, trigger AI processing, then assess detected findings — adjusting severity ratings, removing false positives, and manually adding any missed defects.",
            "Implemented automated PDF report generation consolidating all verified findings, enabling field teams to perform targeted repairs instead of manually inspecting entire power line routes.",
            "Integrated the AI processing service as a Docker container into the application stack.",
          ],
          tech: ["Angular", "TypeScript", "Express.js", "Node.js", "PostgreSQL", "Docker", "Gitlab CI/CD"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Things I've built",
      view_github: "View on GitHub",
      view_video: "Watch Demo",
      view_site: "Visit Site",
      items: [
        {
          name: "Portfolio Website",
          description:
            "My personal developer portfolio — built with Next.js, React, and Tailwind CSS. Designed with a focus on clean UI, responsive layout, dark mode, and bilingual (EN/DE) support.",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Claude Code"],
          github: "https://github.com/danielbode/Porfolio-Website",
          badge: "You're looking at it",
        },
        {
          name: "AR Remote Assistance App",
          description:
            "iOS app enabling on-site engineers to connect with remote experts via AR-assisted video calls. Features AR annotations, drawing tools, pose guidance, gaze tracking, 3D reconstruction, and Apple Pencil support. Built in collaboration with Siemens.",
          tech: ["ARKit", "UIKit", "WebRTC", "Swift"],
          video: "https://www.youtube.com/watch?v=L3SOXoCRJk8",
          badge: "Bachelor Project · Siemens",
        },
        {
          name: "AR Navigation for Elderly",
          description:
            "Bachelor thesis: an augmented reality navigation app designed for elderly people. Evaluated usability and effectiveness of AR interfaces for senior users.",
          tech: ["Unity", "ARKit", "ARCore", "C#"],
          badge: "Bachelor Thesis",
        },
        {
          name: "SixtMixed",
          description:
            "Winner of the hackaTUM 2019 SIXT Challenge. A calendar integration for SIXT mobile apps that solves the problem of mostly empty car-sharing vehicles by pooling customers with similar destinations.",
          tech: ["React", "JavaScript", "Flask", "Python"],
          github: "https://github.com/danielbode/SixtMixed",
          badge: "🏆 hackaTUM Winner",
        },
        {
          name: "Rooftop Runner",
          description:
            "A 2D Jump 'n' Run game with procedural generation of the map and enemies. Features various items, enemy types, and strategies to defeat them.",
          tech: ["Unity", "C#"],
          github: "https://github.com/danielbode/Rooftop-Runner",
        },
        {
          name: "Safari Fighter",
          description: "A 2D survival and maze game with classic game mechanics.",
          tech: ["JavaFX", "Java"],
          github: "https://github.com/danielbode/Safari-Fighter",
        },
      ],
    },
    education: {
      title: "Education",
      degree: "B.Sc. Information Systems",
      university: "Technical University of Munich",
      period: "Oct 2019 – Mar 2025",
      grade: "Grade: 2.5",
      highlights: "Highlights",
      items: [
        "Thesis: Evaluating Usage of Augmented Reality for Elderly People",
        "Bachelor Practical Course: AR iOS App for Remote Assistance (in collaboration with Siemens)",
        "Focus on software engineering, security, and human-computer interaction",
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "I'm open to new opportunities. Whether you have a project, a question, or just want to say hello — feel free to reach out.",
      linkedin_label: "LinkedIn",
      github_label: "GitHub",
      location_label: "Location",
      location_value: "Munich, Germany",
      send_message: "Connect on LinkedIn",
    },
    footer: {
      built_with: "Built with Next.js & Tailwind CSS",
      rights: "All rights reserved.",
      privacy_policy: "Privacy Policy",
      imprint: "Imprint",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      skills: "Kenntnisse",
      experience: "Erfahrung",
      projects: "Projekte",
      education: "Ausbildung",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      title: "iOS Entwickler",
      subtitle:
        "Native iOS-Apps mit Swift, UIKit & SwiftUI – automatisierte App-Store-Pipelines mit Fastlane und fundierte Full-Stack-Kenntnisse.",
      cta_projects: "Projekte ansehen",
      cta_contact: "Kontakt aufnehmen",
      based: "Ansässig in München",
    },
    about: {
      title: "Über mich",
      p1: "Ich bin iOS-Entwickler bei einem Münchner FinTech-Unternehmen und entwickle produktive Apps, die täglich von Vermögensverwaltungen und ihren Kunden in Deutschland und Österreich eingesetzt werden. Mein primäres Framework ist UIKit, ergänzt durch wachsende Erfahrung mit SwiftUI. Ich habe einen B.Sc. in Wirtschaftsinformatik von der Technischen Universität München.",
      p2: "Mein Hauptprojekt ist die zentrale Wealth-Management-Plattform des Unternehmens – eine hybride iOS-App, die eine komplexe Finanzwebanwendung in eine sorgfältig entwickelte native Hülle einbettet. Diese Architektur ermöglicht Beratern, Kundenportfolios über Konten, ETFs, Hedgefonds und Anleihen aus verschiedenen Bankverbindungen zu verwalten, über In-App-Messaging, E-Mail, SMS und MiFID-konforme aufgezeichnete Videoanrufe zu kommunizieren sowie Kundendaten zu pflegen – während ich durch Face ID, Keychain, Push-Benachrichtigungen und Deep Linking für ein nahtlos natives Erlebnis sorge. Daneben entwickle ich die vollständig native UIKit-basierte Multi-Faktor-Authentifizierungs-App des Unternehmens, die SMS-Codes durch sichere In-App-Genehmigungsanfragen ersetzt.",
      p3: "Im DevOps-Bereich verantworte ich die gesamte Release-Pipeline für über 65 individuell gebrandete White-Label-Apps – jede mit eigenem App-Store-Account, Icon, Farbschema und Namen. Mit Fastlane automatisiere ich jeden Schritt: Build, Code-Signing, Upload zu App Store Connect, Verwaltung app-spezifischer Metadaten, Review-Einreichung und Release. Ergänzend bringe ich einen soliden Full-Stack-Hintergrund mit Angular, Spring Boot, Node.js und Docker mit – was mir eine breite Perspektive bei der Verbindung von Mobile- und Backend-Systemen gibt.",
      location: "München, Deutschland",
      languages: "Deutsch (Muttersprache), Englisch (fließend)",
      university: "TU München, B.Sc. Wirtschaftsinformatik",
      linkedin: "linkedin.com/in/daniel-bode-a78b70200",
    },
    skills: {
      title: "Kenntnisse & Technologien",
      subtitle: "Schwerpunkt iOS – mit Full-Stack- und Mobile-DevOps-Hintergrund",
      categories: {
        ios: "iOS-Entwicklung",
        mobileDevops: "Mobile DevOps",
        fullstack: "Full Stack",
        backend: "Backend & APIs",
        databases: "Datenbanken",
        devtools: "Dev Tools & Agile",
      },
    },
    experience: {
      title: "Erfahrung",
      subtitle: "Mein beruflicher Werdegang",
      jobs: [
        {
          company: "TecKonzept",
          role: "iOS Entwickler",
          period: "Apr 2025 – Heute",
          location: "Haar, München",
          link: "https://www.fondskonzept.ag/",
          bullets: [
            "Entwicklung zweier nativer iOS-Apps in Swift und UIKit: eine hybride Wealth-Management-Plattform für Finanzberater und ihre Kunden sowie eine vollständig native Multi-Faktor-Authentifizierungs-App.",
            "Entwicklung der nativen iOS-Hülle für die zentrale FinTech-Webanwendung des Unternehmens – Integration von Face ID, Keychain, Push-Benachrichtigungen und Deep Linking, damit sich eine komplexe Finanzplattform auf dem iPhone vollständig nativ anfühlt.",
            "Vollständige Entwicklung der MFA-App in UIKit – bietet Nutzern sichere In-App-Genehmigungsanfragen als Alternative zu SMS-basierten Login-Codes.",
            "Verantwortung für die gesamte Release-Pipeline von über 65 White-Label-Apps mit Fastlane – automatisierte Builds, Code-Signing, App-Store-Connect-Uploads, app-spezifische Metadaten, Review-Einreichungen und Releases.",
          ],
          tech: ["UIKit", "Swift", "Fastlane", "Xcode", "App Store Connect", "CI/CD"],
        },
        {
          company: "Technische Universität München",
          role: "Full-Stack-Entwickler — Volunteer",
          period: "Jul 2022 – Apr 2023",
          location: "Garching",
          link: "https://artemisapp.github.io/",
          bullets: [
            "Beiträge zu Artemis, einer Open-Source-Lernplattform für tausende Studierende.",
            "Verbesserung und Optimierung des Benachrichtigungssystems zur Steigerung der Nutzerinteraktion.",
            "Implementierung von Learning-Analytics-Features zur Unterstützung adaptiver Lernpfade und Fortschrittsverfolgung.",
            "Code-Reviews und Sicherung der Codequalität nach definierten Standards.",
          ],
          tech: ["Angular", "TypeScript", "Spring Boot", "Java", "WebSockets", "PostgreSQL", "MySQL"],
        },
        {
          company: "Siemens",
          role: "Full-Stack-Entwickler — Werkstudent",
          period: "Apr 2019 – Sep 2022",
          location: "München",
          link: "https://www.siemens-energy.com/global/en/home/products-services/product-offerings/overheadline-solutions/line-digitalization.html",
          bullets: [
            "Entwicklung der Full-Stack-Bedienoberfläche für SIEAERO – ein drohnenbasiertes Inspektionssystem für Hochspannungsleitungen, das RGB-, Infrarot-, UV- und 3D-Punktwolken-Daten erfasst und einer KI-Pipeline zur Fehlererkennung zuführt.",
            "Aufbau des vollständigen Datenerfassungs- und Auswertungsworkflows: Operatoren laden Drohnendaten hoch, starten die KI-Verarbeitung und bewerten erkannte Befunde – inklusive Schweregradeinstufung, Entfernung von Fehlalarmen und manueller Ergänzungen.",
            "Implementierung eines automatisierten PDF-Berichtsexports, der alle verifizierten Defekte bündelt – Wartungsteams können gezielt defekte Stellen reparieren, statt die gesamte Leitung manuell zu prüfen.",
            "Integration des KI-Verarbeitungsdienstes als Docker-Container in den Applikations-Stack.",
          ],
          tech: ["Angular", "TypeScript", "Express.js", "Node.js", "PostgreSQL", "Docker", "Gitlab CI/CD"],
        },
      ],
    },
    projects: {
      title: "Projekte",
      subtitle: "Was ich gebaut habe",
      view_github: "Auf GitHub ansehen",
      view_video: "Demo ansehen",
      view_site: "Website besuchen",
      items: [
        {
          name: "Portfolio-Website",
          description:
            "Mein persönliches Entwickler-Portfolio – erstellt mit Next.js, React und Tailwind CSS. Gestaltet mit Fokus auf klares UI, responsives Layout, Dark Mode und zweisprachigem Support (DE/EN).",
          tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Claude Code"],
          github: "https://github.com/danielbode/Porfolio-Website",
          badge: "Sie sind gerade hier",
        },
        {
          name: "AR Fernassistenz-App",
          description:
            "iOS-App, die Technikern vor Ort ermöglicht, über AR-gestützte Videoanrufe mit Remoteexperten in Kontakt zu treten. Mit AR-Annotationen, Zeichenwerkzeugen, Pose-Guidance, Blickverfolgung, 3D-Rekonstruktion und Apple Pencil-Unterstützung. In Zusammenarbeit mit Siemens entwickelt.",
          tech: ["ARKit", "UIKit", "WebRTC", "Swift"],
          video: "https://www.youtube.com/watch?v=L3SOXoCRJk8",
          badge: "Bachelorprojekt · Siemens",
        },
        {
          name: "AR Navigation für Senioren",
          description:
            "Bachelorarbeit: eine Augmented-Reality-Navigationsapp für ältere Menschen. Evaluierung von Nutzbarkeit und Effektivität von AR-Interfaces für Senioren.",
          tech: ["Unity", "ARKit", "ARCore", "C#"],
          badge: "Bachelorarbeit",
        },
        {
          name: "SixtMixed",
          description:
            "Gewinner der hackaTUM 2019 SIXT Challenge. Eine Kalenderintegration für SIXT Mobile Apps, die das Problem weitgehend leerer Carsharing-Fahrzeuge löst, indem Kunden mit ähnlichen Reisezielen zusammengebracht werden.",
          tech: ["React", "JavaScript", "Flask", "Python"],
          github: "https://github.com/danielbode/SixtMixed",
          badge: "🏆 hackaTUM Gewinner",
        },
        {
          name: "Rooftop Runner",
          description:
            "Ein 2D-Jump-'n'-Run-Spiel mit prozeduraler Generierung der Karte und Gegnern, verschiedenen Items, Gegnertypen und Strategien, diese zu besiegen.",
          tech: ["Unity", "C#"],
          github: "https://github.com/danielbode/Rooftop-Runner",
        },
        {
          name: "Safari Fighter",
          description: "Ein 2D-Überlebens- und Labyrinthspiel mit klassischen Spielmechaniken.",
          tech: ["JavaFX", "Java"],
          github: "https://github.com/danielbode/Safari-Fighter",
        },
      ],
    },
    education: {
      title: "Ausbildung",
      degree: "B.Sc. Wirtschaftsinformatik",
      university: "Technische Universität München",
      period: "Okt 2019 – Mär 2025",
      grade: "Note: 2,5",
      highlights: "Highlights",
      items: [
        "Bachelorarbeit: Evaluierung des Einsatzes von Augmented Reality für ältere Menschen",
        "Bachelor-Praxiskurs: AR iOS App für Fernassistenz (in Zusammenarbeit mit Siemens)",
        "Schwerpunkte: Softwareentwicklung, IT-Sicherheit und Mensch-Computer-Interaktion",
      ],
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle:
        "Ich bin offen für neue Möglichkeiten. Ob Sie ein Projekt, eine Frage haben oder einfach Kontakt aufnehmen möchten – schreiben Sie mir gerne.",
      linkedin_label: "LinkedIn",
      github_label: "GitHub",
      location_label: "Standort",
      location_value: "München, Deutschland",
      send_message: "Auf LinkedIn vernetzen",
    },
    footer: {
      built_with: "Erstellt mit Next.js & Tailwind CSS",
      rights: "Alle Rechte vorbehalten.",
      privacy_policy: "Datenschutzerklärung",
      imprint: "Impressum",
    },
  },
} as const;
