import React from "react";

const GetStarted: React.FC = () => {
  return (
    <>
      <article className="w-full md:w-10/12 max-w-full">
        <p>
          This package offers a seamless way to add dark mode support to your
          React app using Tailwind CSS. With just a few lines of code, you can
          integrate a theme provider, a ready-made toggle button, and a powerful
          hook to manage user preferences and system themes.
        </p>
        <pre className="bg-zinc-900 dark:bg-stone-700 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
          <code>npm install react-theme-snap</code>
        </pre>

        <h2 className="">Feature Overview</h2>
        <ul className="">
          <li>Plug & Play ThemeProvider</li>
          <li>Detects and applies user's OS-level theme preference.</li>
          <li>
            Supports Tailwind <code>dark:</code> functionality too.
          </li>
          <li>Persistent theme state</li>
          <li>Customizable theme tokens.</li>
          <li>Lightweight and dependency-free (except for Lucide icons).</li>
        </ul>
      </article>
    </>
  );
};

export default React.memo(GetStarted);
