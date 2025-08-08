import React from "react";
import CodeBlock from "./CodeBlock";

const ThemeProvider: React.FC = () => {
  return (
    <>
      <article className="w-full md:w-10/12 max-w-full overflow-x-auto">
        <p>
          The <code>ThemeProvider</code> is the core wrapper component that
          enables theme toggling in your React app. It handles initial theme
          detection (based on system preference), persists the user's choice,
          and makes theme utilities accessible throughout the component tree.{" "}
        </p>
        <h4>In your App.jsx or Main.jsx </h4>
        <CodeBlock>
          <code>
            {`import { ThemeProvider } from "react-theme-snap";

const App = () => {
  return (
    <ThemeProvider storageKey="my-theme" tokens={tokens}>
    <div className="w-full h-full">
    Content...
    </div>
    </ThemeProvider>
  );
};

export default App;
`}
          </code>
        </CodeBlock>
        <hr />
        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="py-4">
                <td className="py-4">storageKey </td>
                <td className="py-4">string </td>
                <td className="py-4">No </td>
                <td className="py-4">
                  {" "}
                  Key to persist the selected theme in localStorage.{" "}
                </td>
                <td className="py-4">
                  <code>my-theme</code> (By default){" "}
                </td>
              </tr>
              <tr className="py-4">
                <td className="py-4">tokens </td>
                <td className="py-4">object </td>
                <td className="py-4">Yes </td>
                <td className="py-4">
                  Theme styles for dark and light modes.{" "}
                </td>
                <td className="py-4">{`{ dark: {...}, light: {...} }`}</td>
              </tr>
              <tr className="py-4">
                <td className="py-4">children </td>
                <td className="py-4">node</td>
                <td className="py-4">Yes </td>
                <td className="py-4">
                  React children to be wrapped inside the provider.
                </td>
                <td className="py-4">{`<App />`}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
        <h2 className="">Note:</h2>
        <h3 className="">The token object is important to understand!</h3>
        <p>
          Think{" "}
          <code>
            <i>token</i>
          </code>
          object as a convention for using this utility.
        </p>
        <h4 className="">
          The token object has two sub-objects{" "}
          <code>
            <i>light</i>
          </code>{" "}
          &{" "}
          <code>
            <i>dark</i>
          </code>{" "}
          objects which are must to defined.
        </h4>
        <p className="mt-4">
          <i>For Example:</i>
        </p>
        {/* Token starter code */}
        <CodeBlock>
          <code>
            {`
const tokens = {

  light : {

    // More optional objects to be described further

  },

  dark : {

     // More optional objects to be described further

  },

};`}
          </code>
        </CodeBlock>

        <hr />
        <h2>What are the benefits of these ?</h2>
        <ul>
          <li>Manages the defined classes based on the theme preference.</li>
          <li>You can define any number of tokens in these objects.</li>
          <li>
            This helps in managing the classes for both the themes when there
            are many number of classes present.
          </li>
          <li>
            This makes sure that the classes stays in one place and can be
            managed easily.
          </li>
          <li className="">
            Variables can be used anywhere with the help of{" "}
            <code>useDarkTheme()</code>
            hook.
          </li>
          <li className="">Enhances code readability.</li>
        </ul>
        <hr />
        <h3>Usage Example :</h3>
        <CodeBlock>
          <code>
            {`
const tokens = {

  light : {

    container: "bg-zinc-900 text-white",
    card: "bg-white text-zinc-900",
    button: "border border-white rounded-lg p-2 px-6",
    icon: "text-white",

  },

  dark : {

    container: "bg-white text-black",
    card: "bg-zinc-900 text-white",
    button: "border border-gray-400 rounded-lg p-2 px-6",
    icon: "text-black",

  },

};`}
          </code>
        </CodeBlock>

        <blockquote>
          These tokens further can be accessed and used accordingly anywhere in
          your app using the <code>UseDarkTheme()</code> hook.
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

        <blockquote>
          Read the <code>useDarkTheme()</code> hook section to learn more
        </blockquote>
        <hr />
        <h4 className="">
          If there are no many classes to toggle , you can use Tailwind's{" "}
          <code>
            <i>dark:</i>
          </code>{" "}
          instead of creating a token for a single class
        </h4>
        <h3>Usage Example :</h3>
        <CodeBlock>
          <code>
            {`
const Container = () => {

      return (
      <div className="w-full h-screen p-3 not-dark:bg-white dark:bg-slate-900">

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

export default React.memo(ThemeProvider);
