import type { ReactNode } from "react";

interface ThemeTokens {
  [key: string]: string;
}
export interface ThemeProviderProps {
  children: ReactNode;
  tokens: {
    dark: ThemeTokens;
    light: ThemeTokens;
  };
  className?: string;
  storageKey?: string;
}

export interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
  themeClasses: ThemeTokens;
}
