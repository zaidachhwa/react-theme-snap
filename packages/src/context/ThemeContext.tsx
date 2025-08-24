"use client";

import { useEffect, useState } from "react";
import type { ThemeProviderProps } from "../types";
import { ThemeContext } from "../hooks/useDarkTheme";

export const ThemeProvider = ({
  children,
  tokens,
  storageKey = "is-dark",
}: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const systemDefaultTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (localStorage.getItem(storageKey) === null) {
      setIsDark(systemDefaultTheme);
    }
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem(storageKey, JSON.stringify(isDark));

    document.documentElement.classList.add("theme-transition");
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 300);
    return () => clearTimeout(timeout);
  }, [isDark, storageKey]);

  const toggleTheme = () => setIsDark((prev: boolean) => !prev);

  if (!tokens.dark) {
    throw new Error("Dark object not definded");
  }
  if (!tokens.light) {
    throw new Error("Light object not definded");
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
      <>{children}</>
    </ThemeContext.Provider>
  );
};
