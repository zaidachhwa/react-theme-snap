import React from "react";
import CodeBlock from "./CodeBlock";

const Faq: React.FC = () => {
  return (
    <>
      <article>
        <h3>
          1. <code>tokens.dark</code> or <code>tokens.light</code> is not
          defined
        </h3>
        <h4>Cause</h4>
        <p>
          This happens when your tokens object passed to{" "}
          <code>{`<ThemeProvider />`}</code> is missing the dark or light keys.
        </p>
        <h4>Solution</h4>
        <p>Make sure your tokens object follows the correct structure.</p>
        <CodeBlock>
          {`
const tokens = {
  light: {              -------------> Needs to be defined

    background: "bg-white",   --->
    text: "text-black",       ---> optional tokens
  },
  dark: {               -------------> Needs to be defined

    background: "bg-black",   --->
    text: "text-white",       ---> optional tokens
  },
};

<ThemeProvider storageKey="my-theme" tokens={tokens}>
  <App />
</ThemeProvider>

`}
        </CodeBlock>
        <hr />
        <h3>
          2. <code>useDarkTheme()</code> was used outside of the provider.
        </h3>
        <h4>Cause</h4>
        <p>
          The <code>useDarkTheme()</code> hook only works inside components
          wrapped by <code>{`<ThemeProvider />`}</code>. If you try to call it
          outside, React will throw this error.
        </p>
        <pre className="bg-zinc-900 dark:bg-stone-700 text-red-400 p-4 rounded-md overflow-x-auto text-sm">
          {`
const App = () => {

  const { isDark, toggleTheme, themeClasses } = useDarkTheme();             -----------> Wrong way of using the hook

  return (
    <ThemeProvider storageKey="my-theme" tokens={tokens}>

            <-- Content -->

    </ThemeProvider>
  );
};
          `}
        </pre>
        <h4>Solution</h4>
        <p>
          Ensure your component tree is wrapped with{" "}
          <code>{`<ThemeProvider />`}</code> at the top level:
        </p>

        <h4>Usage Example :</h4>
        <CodeBlock>
          {`
const Content = () => {
  const { isDark, toggleTheme, themeClasses } = useDarkTheme();

  return (
    <>
      <div
        className={\`min-h-screen max-w-screen relative flex items-center justify-center $\{themeClasses.container}\`}
      >

        <h1 className="text-3xl md:text-5xl font-bold">React Snap Demo</h1>

          <ThemeToggle
            isDark={isDark}
            toggleTheme={toggleTheme}
            iconSize={28}
            className="border border-gray-400 p-2 cursor-pointer rounded-lg "
          />

        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider storageKey="my-theme" tokens={tokens}>
      <Content/>
    </ThemeProvider>
  );
};

            `}
        </CodeBlock>
        <hr />

        <h3>Tips</h3>
        <p>If you still face issues, double-check:</p>
        <ol>
          <li>
            Your <code>tokens</code> object has both <code>light</code> and{" "}
            <code>dark</code>
            modes.
          </li>
          <li>
            Your hook usage is inside the <code>ThemeProvider</code>.
          </li>
        </ol>
      </article>
    </>
  );
};

export default React.memo(Faq);
