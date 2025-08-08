import React from "react";
import CodeBlock from "./CodeBlock";

const Hook: React.FC = () => {
  return (
    <>
      <article className="w-full md:w-10/12 max-w-full overflow-x-auto">
        <p>
          The{" "}
          <code>
            <i>useDarkTheme()</i>
          </code>{" "}
          hook gives you full programmatic control over the current theme. It
          allows you to read and update the dark/light mode dynamically inside
          your React components.
        </p>
        <h4>Usage Example :</h4>
        <CodeBlock>
          <code>
            {`import { useDarkTheme } from "react-theme-snap";

const MyComponent = () => {

  const { isDark, toggleTheme, themeClasses } = useDarkTheme();

  return (

    <div className={\`p-4 rounded $\{themeClasses.container}\`}>

      <p className="mb-4">
        Current theme: {isDark ? "Dark" : "Light"}
      </p>

      <button
        className={\`px-4 py-2 $\{themeClasses.button}\`}
        onClick={toggleTheme}>
        Switch Theme
      </button>

    </div>
  );
};

export default MyComponent;

`}
          </code>
        </CodeBlock>
        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Value</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="py-4">
                <td className="py-4">isDark</td>
                <td className="py-4">boolean</td>
                <td className="py-4">
                  Indicates whether the current theme is dark
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">toggleTheme</td>
                <td className="py-4">function</td>
                <td className="py-4">
                  A function to toggle between dark and light modes{" "}
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">themeClasses</td>
                <td className="py-4">object</td>
                <td className="py-4">
                  The applied token styles:{" "}
                  <code>{`{ container, card, button, ... }`}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />

        <blockquote>
          The tokens defined in the{" "}
          <code>
            <i>tokens</i>
          </code>{" "}
          object can be accessed and used accordingly using the{" "}
          <code>themeClasses</code> value.
        </blockquote>

        <h3>Usage Example :</h3>
        <CodeBlock>
          <code>
            {`
import { useDarkTheme } from "react-theme-snap";


const Container = () => {
      const { themeClasses } = useDarkTheme() ;

      return (
      <div className{\`w-full h-screen p-3 $\{themeClasses.container}\`}>

      </div>
      );
};

export default Container ;
                `}
          </code>
        </CodeBlock>
      </article>
    </>
  );
};

export default React.memo(Hook);
