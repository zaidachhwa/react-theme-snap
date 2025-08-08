import clsx from "clsx";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = ({
  isDark,
  toggleTheme,
  iconSize,
  className,
}: {
  isDark: boolean;
  toggleTheme: () => void;
  iconSize?: number;
  className?: string;
}) => (
  <button
    onClick={toggleTheme}
    className={clsx("p-2 rounded-md transition cursor-pointer", className)}
    aria-label="Toggle theme"
  >
    {isDark ? <Sun size={iconSize} /> : <Moon size={iconSize} />}
  </button>
);
