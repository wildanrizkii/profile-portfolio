"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

export function NextThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
