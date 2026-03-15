"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

/** Wraps the app with ThemeProvider for system-aware dark/light mode support. */
const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>
);

export default Providers;
