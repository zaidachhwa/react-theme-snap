"use client";

import React, { useState } from "react";

interface LocalThemedProps {
  defaultMode?: "light" | "dark" | "inherit";
  tokens?: { light: Record<string, string>; dark: Record<string, string> };
  children: (theme: {
    isDark: boolean;
    toggleTheme: () => void;
    themeClasses: Record<string, string>;
  }) => React.ReactNode;
}

export const ThemedComponent: React.FC<LocalThemedProps> = ({
  defaultMode = "inherit",
  tokens,
  children,
}) => {
  // local theme state
  const [isDark, setIsDark] = useState(() => {
    if (defaultMode === "inherit")
      return document.documentElement.classList.contains("dark");
    return defaultMode === "dark";
  });

  const toggleTheme = () => setIsDark((prev) => !prev);

  const themeClasses = isDark ? tokens?.dark || {} : tokens?.light || {};

  return <>{children({ isDark, toggleTheme, themeClasses })}</>;
};
