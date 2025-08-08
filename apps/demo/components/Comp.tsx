import React from "react";
import CodeBlock from "./CodeBlock";

const Comp: React.FC = () => {
  return (
    <>
      <article className="w-full md:w-10/12 max-w-full overflow-x-auto">
        <p>
          The package ships with plug-and-play components to help you get
          started quickly without worrying about wiring up state or logic
          manually.
        </p>
        {/* First  */}
        <h2>
          1. <code>ThemeComponent</code> - Independent Theme Component
        </h2>
        <p>
          <code>ThemedComponent</code> is a self-contained themed component. It
          does not require a global <code>ThemeProvider</code> and manages its
          own theme state internally. Perfect for cases where an element’s theme
          should be independent from the rest of the app — for example, a{" "}
          <i>code preview</i>, <code>chart</code>, or <code>card</code> that can
          be switched to dark mode even if the site is light mode.
        </p>
        <h4>Usage Example :</h4>
        <CodeBlock>
          <code>{`

 <ThemedComponent defaultMode="" tokens={<-- same pattern as described earlier --> } >

      {({ isDark, toggleTheme, themeClasses }) => (

          <div className={\`$\{themeClasses.container} p-4\`}>
              <button onClick={toggleTheme}>
              Toggle Local Theme (currently {isDark ? "Dark" : "Light"})
              </button>
            <p>
              This section is {isDark ? "dark" : "light"} regardless of the
              global theme.
            </p>
          </div>
        )}

</ThemedComponent>

          `}</code>
        </CodeBlock>

        <blockquote>
          In this component the <code>tokens</code> prop is not required.
          However you can use it when the classes are many to handle else you
          can use the boolean <code>isDark</code> value or the tailwind's{" "}
          <code>:dark</code> attribute to toggle the classes.
        </blockquote>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table className="overflow-x-clip text-sm">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="py-4">
                <td className="py-4">defaultMode</td>
                <td className="py-4">
                  <code>light</code>| <code>dark</code> | <code>inherit</code>
                </td>
                <td className="py-4">
                  <code>light</code>
                </td>
                <td className="py-4">
                  The starting theme mode. <code>inherit</code> will check if
                  the page’s <code>{`<html>`}</code> element has dark class.
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">
                  <code>tokens</code>
                </td>
                <td className="py-4">
                  <code>{`{ light: Record<string,string>, dark: Record<string,string> }`}</code>
                </td>
                <td className="py-4">{`{ }`}</td>
                <td className="py-4">
                  Theme token objects for light and dark modes.
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">children</td>
                <td className="py-4">
                  <code>{`(theme: { isDark, toggleTheme, themeClasses }) => ReactNode`}</code>
                </td>
                <td className="py-4"> - </td>
                <td className="py-4">
                  Render prop for rendering UI with the current theme state.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />

        {/* Second   */}
        <h2>
          2. <code>ThemeComponentSync</code> - Synced Theme Component
        </h2>
        <p>
          <code>ThemedComponentSync</code> initializes its theme state from the
          global <code>ThemeProvider</code> (respecting <code>inherit</code> or
          <code>inherit-reverse</code> ), but after that it manages its own
          local state independently. This means it won’t automatically react to
          future global theme changes unless toggled manually within the
          component. If no <code>ThemeProvider</code> is available, its behavior
          depends on <code>useDarkTheme()’s</code> internal fallback logic.
        </p>
        <h4>Usage Example :</h4>
        <CodeBlock>
          <code>{`

 <ThemedComponentSync defaultMode="" tokens={<-- same pattern as described earlier --> } >

      {({ isDark, toggleTheme, themeClasses }) => (

          <div className={\`$\{themeClasses.container} p-4\`}>
              <button onClick={toggleTheme}>
              Toggle Local Theme (currently {isDark ? "Dark" : "Light"})
              </button>
            <p>
              This section is {isDark ? "dark" : "light"} regardless of the
              global theme.
            </p>
          </div>
        )}

</ThemedComponentSync>

          `}</code>
        </CodeBlock>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table className="overflow-x-clip text-sm">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="py-4">
                <td className="py-4">defaultMode</td>
                <td className="py-4">
                  <code>light</code>| <code>dark</code> | <code>inherit</code> |{" "}
                  <code>inherit-reverse</code>
                </td>
                <td className="py-4">
                  <code>light</code>
                </td>
                <td className="py-4">
                  Starting theme mode. <code>inherit</code> matches the global
                  theme,
                  <code>inherit-reverse</code> uses the opposite of the global
                  theme, and <code>light / dark</code> start with fixed modes.
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">
                  <code>tokens</code>
                </td>
                <td className="py-4">
                  <code>{`{ light: Record<string,string>, dark: Record<string,string> }`}</code>
                </td>
                <td className="py-4">{`{ }`}</td>
                <td className="py-4">
                  Theme token objects for light and dark modes.
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">children</td>
                <td className="py-4">
                  <code>{`(theme: { isDark, toggleTheme, themeClasses }) => ReactNode`}</code>
                </td>
                <td className="py-4"> - </td>
                <td className="py-4">
                  Render prop for rendering UI with the current theme state.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />

        {/* When to use table   */}

        <blockquote>
          <h2>Theme Strategy Overview</h2>
        </blockquote>
        <p>When to Use Global State vs. Local State in Your UI</p>
        {/* table */}
        <div style={{ overflowX: "auto" }}>
          <table className="overflow-x-clip text-sm">
            <thead>
              <tr>
                <th>Option</th>
                <th>Scope</th>
                <th>Best For</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="py-4">
                <td className="py-4">
                  <code>useDarkTheme()</code>
                </td>
                <td className="py-4">
                  <strong>Global</strong>
                </td>
                <td className="py-4">
                  When you want the <strong>entire application</strong> to share
                  the same theme state.
                </td>
                <td className="py-4">
                  Requires <code>ThemeProvider</code> at the app root. Perfect
                  for dashboards, settings pages, or anything that needs a
                  synchronized dark/light mode across all components.
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">
                  <code>ThemedElement</code>
                </td>
                <td className="py-4">
                  <strong>Local</strong>
                </td>
                <td className="py-4">
                  When a single component or section needs its{" "}
                  <strong>own independent theme</strong> (can differ from the
                  global theme).
                </td>
                <td className="py-4">
                  Default mode can be <code>light</code>, <code>dark</code>, or{" "}
                  <code>inherit</code> from the global theme. State is stored
                  only in memory.
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">
                  <code>ThemedElementSync</code>
                </td>
                <td className="py-4">
                  <strong>Local (Persistent)</strong>
                </td>
                <td className="py-4">
                  Same as <code>ThemedElement</code>, but works with{" "}
                  <code>inherit</code> and <code>inherit-reverse</code> to
                  initialize from the global state.
                </td>
                <td className="py-4">
                  Great for widgets like code blocks or embedded previews where
                  you want per-element theme initialization based on global
                  settings but managed locally afterwards.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>3. Theme Toggle</h2>
        <p>
          The ThemeToggle component is a simple button (or icon) that lets users
          switch between light and dark modes.
        </p>
        <h4>Usage Example :</h4>
        <CodeBlock>
          <code>
            {`import { ThemeToggle, useDarkTheme } from "react-theme-snap";

const Header = () => {

  const { isDark, toggleTheme } = useDarkTheme();

  return (

    <header className="flex justify-end p-4">

      <ThemeToggle
        isDark={isDark}
        toggleTheme={toggleTheme}
        iconSize={24}
        className="rounded-lg"
      />

    </header>

  );
};

export default Header;

`}
          </code>
        </CodeBlock>

        <hr />
        <blockquote>
          More components may be added or enhanced in future versions of this
          package — such as theme-aware Card, Button, or Icon wrappers. This
          ensures the library remains flexible and extensible while keeping
          boilerplate low. Be sure to check the changelog or GitHub repo for
          updates and new releases!
        </blockquote>
      </article>
    </>
  );
};

export default React.memo(Comp);
