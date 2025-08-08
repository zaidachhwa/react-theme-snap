import { createContext, useContext } from "react";
import type { ThemeContextProps } from "../types";

export const ThemeContext = createContext<ThemeContextProps | null>(null);
export const useDarkTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("UseDarkTheme Hook was used outside of the ThemeProvider");
  return context;
};
