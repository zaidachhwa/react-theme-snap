import React from "react";
import { useDarkTheme } from "react-theme-snap";

const Card: React.FC = () => {
  const { themeClasses } = useDarkTheme();
  return (
    <>
      <div
        className={`w-full md:w-md text-center tracking-wider mt-5 ${themeClasses.card}`}
      >
        <p>
          A lightweight React package to easily add dark mode support with theme
          persistence, custom tokens. Plug-and-play with built-in context, hook
          — fully customizable for your UI.
        </p>
      </div>
    </>
  );
};

export default Card;
