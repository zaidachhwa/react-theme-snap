"use client";

import { useEffect, useState } from "react";
import type { ThemeProviderProps } from "../types";
import { ThemeContext } from "../hooks/useDarkTheme";

export const ThemeProvider = ({
  children,
  tokens,
  storageKey = "is-dark",
}: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(true); // default to false (safe for SSR)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    const systemDefaultTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (saved !== null) {
      setIsDark(JSON.parse(saved));
    } else {
      setIsDark(systemDefaultTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem(storageKey, JSON.stringify(isDark));

    document.documentElement.classList.add("theme-transition");
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timeout);
  }, [isDark, storageKey]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  if (!tokens.dark) {
    throw new Error("Dark object not defined");
  }
  if (!tokens.light) {
    throw new Error("Light object not defined");
  }

  const themeClasses = isDark ? tokens.dark : tokens.light;

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        themeClasses,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
