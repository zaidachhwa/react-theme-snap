import { Github, MoveLeft } from "lucide-react";
import React, { Suspense, useState } from "react";
import { ThemeToggle, useDarkTheme } from "react-theme-snap";
import { Link } from "react-router-dom";
const GetStarted = React.lazy(() => import("./GetStarted"));
const ThemeProvider = React.lazy(() => import("./ThemeProvider"));
const Hook = React.lazy(() => import("./Hook"));
const Comp = React.lazy(() => import("./Comp"));
const Faq = React.lazy(() => import("./Faq"));

const fallback = (
  <>
    <div className="w-full h-full text-3xl flex items-center justify-center mt-20">
      Loading...
    </div>
  </>
);

const options = [
  {
    index: 0,
    title: "Get Started",
    desc: (
      <Suspense fallback={fallback}>
        <GetStarted />
      </Suspense>
    ),
  },
  {
    index: 1,
    title: "Theme Provider",
    desc: (
      <Suspense fallback={fallback}>
        <ThemeProvider />
      </Suspense>
    ),
  },
  {
    index: 2,
    title: "UseDarkTheme( )",
    desc: (
      <Suspense fallback={fallback}>
        <Hook />
      </Suspense>
    ),
  },
  {
    index: 3,
    title: "Components",
    desc: (
      <Suspense fallback={fallback}>
        <Comp />
      </Suspense>
    ),
  },
  {
    index: 4,
    title: "FAQs",
    desc: (
      <Suspense fallback={fallback}>
        <Faq />
      </Suspense>
    ),
  },
];

const Guide: React.FC = () => {
  const [index, setIndex] = useState(0);

  const [title, setTitle] = useState(options[index].title);
  const [guide, setGuide] = useState(options[index].desc);

  const updateGuide = (newIdx: number) => {
    setIndex(newIdx);
    setTitle(options[newIdx].title);
    setGuide(options[newIdx].desc);
  };

  const { isDark, toggleTheme, themeClasses } = useDarkTheme();

  return (
    <div
      className={`w-screen min-h-screen relative flex flex-col items-center ${themeClasses.container}`}
    >
      <div className="w-full border-b shadow-xs border-gray-200 h-14 p-6 flex items-center justify-between">
        <Link
          to="/"
          className={`
         w-fit cursor-pointer ${themeClasses.icon}
        `}
        >
          <MoveLeft />
        </Link>
        <div className="w-full flex items-center justify-end gap-5">
          <ThemeToggle
            isDark={isDark}
            toggleTheme={toggleTheme}
            iconSize={24}
            className={`cursor-pointer rounded-lg ${themeClasses.icon}`}
          />
          <Github className={`cursor-pointer ${themeClasses.icon}`} />
        </div>
      </div>
      {/* Guide Nav */}

      <div className="w-full flex-1 h-full flex flex-col gap-6 xl:gap-0 md:flex-row">
        <div className="w-full md:w-72 max-h-full flex flex-col space-y-5 p-6 md:border-r border-gray-200">
          {options.map((val, i) => {
            return (
              <div
                onClick={() => {
                  setGuide(val.desc);
                  setTitle(val.title);
                  setIndex(val.index);
                }}
                key={i}
                className={`cursor-pointer hover:shadow hover:-translate-y-0.5 p-2 transition-all duration-200 rounded-lg font-medium tracking-wide
                  ${index === i ? "border-2 pl-4 border-gray-200" : ""}
                  `}
              >
                {val.title}
              </div>
            );
          })}
        </div>
        <div className="h-[calc(100vh-3.5rem)] w-full md:max-w-full overflow-y-auto prose prose-stone dark:prose-invert">
          <div className="min-h-full flex flex-col gap-10 p-3 md:p-6">
            <div className="text-3xl font-semibold">{title}</div>
            <div className="w-full tracking-wide font-medium">
              {guide}
              <div className="w-full flex items-center justify-evenly mt-20 my-10">
                <button
                  className={`${themeClasses.button} ${
                    index === 0
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  } hover:shadow hover:-translate-y-0.5 transition-all`}
                  onClick={() => updateGuide(Math.max(index - 1, 0))}
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    updateGuide(Math.min(index + 1, options.length - 1))
                  }
                  className={`${themeClasses.button} ${
                    index === options.length - 1
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  } hover:shadow hover:-translate-y-0.5 transition-all`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
