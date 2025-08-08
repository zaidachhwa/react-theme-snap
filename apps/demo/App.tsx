import { Link, Route, Routes } from "react-router-dom";
import { ThemeProvider, ThemeToggle, useDarkTheme } from "react-theme-snap";
import Card from "./components/Card";
import Guide from "./components/Guide";
import { Github } from "lucide-react";

const tokens = {
  dark: {
    container: "bg-zinc-900 text-white",
    card: "text-white",
    button: "border border-white rounded-lg p-2 px-6",
    icon: "text-white",
  },
  light: {
    container: "bg-white text-black",
    card: "text-zinc-900",
    button: "border border-gray-400 rounded-lg p-2 px-6",
    icon: "text-black",
  },
};

const Content = () => {
  const { isDark, toggleTheme, themeClasses } = useDarkTheme();

  return (
    <>
      <div
        className={`min-h-screen scroll-smooth max-w-screen relative flex items-center justify-center ${themeClasses.container} `}
      >
        <Github className="absolute top-8 cursor-pointer right-8" />
        <div
          className={`w-2/3 text-center h-full flex flex-col items-center justify-center gap-4`}
        >
          <h1 className="text-3xl md:text-5xl font-bold">React Snap Demo</h1>
          <ThemeToggle
            isDark={isDark}
            toggleTheme={toggleTheme}
            iconSize={28}
            className="border border-gray-400 p-2 cursor-pointer rounded-lg hover:shadow-md"
          />
          <Card />
          <Link
            to="/guide"
            className="border border-gray-400 hover:shadow hover:-translate-y-0.5 transition-all p-2 px-4 rounded-md cursor-pointer"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <ThemeProvider storageKey="my-theme" tokens={tokens}>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
