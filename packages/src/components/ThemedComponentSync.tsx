"use client";
import React, { useState } from "react";
import { useDarkTheme } from "../hooks/useDarkTheme";

interface LocalThemedProps {
  defaultMode?: "light" | "dark" | "inherit" | "inherit-reverse";
  tokens?: { light: Record<string, string>; dark: Record<string, string> };
  children: (theme: {
    isDark: boolean;
    toggleTheme: () => void;
    themeClasses: Record<string, string>;
  }) => React.ReactNode;
}

export const ThemedComponentSync: React.FC<LocalThemedProps> = ({
  defaultMode = "inherit",
  tokens,
  children,
}) => {
  const globalTheme = useDarkTheme();

  // local theme state
  const [isDark, setIsDark] = useState(() => {
    if (defaultMode === "inherit") return globalTheme.isDark;
    if (defaultMode === "inherit-reverse") return !globalTheme.isDark;
    return defaultMode === "dark";
  });

  const toggleTheme = () => setIsDark((prev) => !prev);

  const themeClasses = isDark
    ? tokens?.dark || globalTheme.themeClasses
    : tokens?.light || globalTheme.themeClasses;

  return <>{children({ isDark, toggleTheme, themeClasses })}</>;
};
