# react-theme-snap

### A seamless way to add dark mode support to your React app using Tailwind CSS. With just a few lines of code, you can integrate a Theme Provider, ready-made components , and a powerful hook to manage user preferences and system themes.

[Documentation](https://react-theme-snap.vercel.app)

---

## 📦 Installation

```bash
npm install react-theme-snap

or

yarn install react-theme-snap
```

### SSR Safe

---

> ## ThemeProvider

The `ThemeProvider` is the core wrapper component that enables theme toggling in your React app.

### It handles **initial theme detection** (based on system preference), **persists the user's choice**, and **makes theme utilities accessible** throughout the component tree.

---

### In your `App.jsx` or `Main.jsx`

```jsx
import { ThemeProvider } from "react-theme-snap";

const App = () => {
  return (
    <ThemeProvider storageKey="my-theme" tokens={tokens}>
      <div className="w-full h-full">Content...</div>
    </ThemeProvider>
  );
};

export default App;
```

| Prop       | Type   | Required | Description                                        | Example                         |
| ---------- | ------ | -------- | -------------------------------------------------- | ------------------------------- |
| storageKey | string | No       | Key to persist the selected theme in localStorage. | `my-theme` (By default)         |
| tokens     | object | Yes      | Theme styles for dark and light modes.             | `{ dark: {...}, light: {...} }` |
| children   | node   | No       | React children to be wrapped inside the provider.  | `<App />`                       |

## **Note** :

## The token object is important to understand!

### Think `token` object as a convention for using this utility.

### The `token` object has two sub-objects `light` & `dark` objects which are must to defined.

_For Example_

```jsx
const tokens = {
  light: {
    // More optional objects to be described further
  },

  dark: {
    // More optional objects to be described further
  },
};
```

---

### What are the benefits of these ?

- #### Manages the defined classes based on the theme preference.
- #### You can define any number of tokens in these objects.
- #### This helps in managing the classes for both the themes when there are many number of classes present.
- #### Variables can be used anywhere with the help of useDarkTheme()hook.
- #### Enhances code readability.

---

### Usage Example :

```jsx
const tokens = {
  light: {
    container: "bg-zinc-900 text-white",
    card: "bg-white text-zinc-900",
    button: "border border-white rounded-lg p-2 px-6",
    icon: "text-white",
  },

  dark: {
    container: "bg-white text-black",
    card: "bg-zinc-900 text-white",
    button: "border border-gray-400 rounded-lg p-2 px-6",
    icon: "text-black",
  },
};
```

> ### These tokens further can be accessed and used accordingly anywhere in your app using the `UseDarkTheme()` hook.

### Usage Example :

```jsx

import { useDarkTheme } from "react-theme-snap";


const Container = () => {
      const { themeClasses } = useDarkTheme() ;

      return (
      <div className{`w-full h-screen p-3 ${themeClasses.container}`}>

      </div>
      );
};

export default Container ;
```

> ### Read the `useDarkTheme()` hook section to learn more

---

### If there are no many classes to toggle , you can use Tailwind's `dark:` instead of creating a token for a single class

### Usage Example :

```jsx
const Container = () => {
  return (
    <div className="w-full h-screen p-3 not-dark:bg-white dark:bg-slate-900"></div>
  );
};

export default Container;
```

---

---

> ## UseDarkTheme()

### The `useDarkTheme()` hook gives you full programmatic control over the current theme. It allows you to read and update the dark/light mode dynamically inside your React components.

### Usage Example :

```jsx
import { useDarkTheme } from "react-theme-snap";

const MyComponent = () => {
  const { isDark, toggleTheme, themeClasses } = useDarkTheme();

  return (
    <div className={`p-4 rounded ${themeClasses.container}`}>
      <p className="mb-4">Current theme: {isDark ? "Dark" : "Light"}</p>

      <button
        className={`px-4 py-2 ${themeClasses.button}`}
        onClick={toggleTheme}
      >
        Switch Theme
      </button>
    </div>
  );
};

export default MyComponent;
```

| Value          | Type     | Description                                                  |
| -------------- | -------- | ------------------------------------------------------------ |
| `isDark`       | boolean  | Indicates whether the current theme is `dark`                |
| `toggleTheme`  | function | A function to toggle between `dark` and `light` modes        |
| `themeClasses` | object   | The applied token styles: `{ container, card, button, ... }` |

---

> ### The `tokens` defined in the tokens object can be accessed and used accordingly using the `themeClasses` value.

### Usage Example :

```jsx
import { useDarkTheme } from "react-theme-snap";


const Container = () => {
      const { themeClasses } = useDarkTheme() ;

      return (
      <div className{`w-full h-screen p-3 ${themeClasses.container}`}>

      </div>
      );
};

export default Container ;
```

---

> ## Component

### The package ships with plug-and-play components to help you get started quickly without worrying about wiring up state or logic manually.

### 1. `ThemeComponent` - Independent Theme Component

#### `ThemedComponent` is a self-contained themed component. It does not require a global `ThemeProvider` and manages its own theme state internally. Perfect for cases where an element’s theme should be independent from the rest of the app — for example, a _code preview_, _chart_, or _card_ that can be switched to **dark mode** even if the site is **light mode**.

## Usage Example :

```jsx
 <ThemedComponent defaultMode="" tokens={<-- same pattern as described earlier --> } >

      {({ isDark, toggleTheme, themeClasses }) => (

          <div className={`${themeClasses.container} p-4`}>
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

```

> ### In this component the `tokens` prop is not required. However you can use it when the classes are many to handle else you can use the boolean `isDark` value or the tailwind's `:dark` attribute to toggle the classes.

| Prop            | Type                                                                                       | Default | Description                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------- |
| **defaultMode** | `light` \| `dark` \| `inherit`                                                             | `light` | The starting theme mode. `inherit` will check if the page’s `<html>` element has the `dark` class. |
| **tokens**      | `{ light: Record<string, string>, dark: Record<string, string> }`                          | `{}`    | Theme token objects for light and dark modes.                                                      |
| **children**    | `(theme: { isDark: boolean, toggleTheme: () => void, themeClasses: string }) => ReactNode` | —       | Render prop for rendering UI based on the current theme state.                                     |

---

### 2. `ThemeComponentSync` - Synced Theme Component

#### `ThemedComponentSync` initializes its theme state from the global `ThemeProvider` (respecting inherit or inherit-reverse ), but after that it manages its own local state independently. This means it won’t automatically react to future global theme changes unless toggled manually within the component. If no ThemeProvider is available, its behavior depends on `useDarkTheme()’s` internal fallback logic.

### Usage Example :

```jsx

 <ThemedComponentSync defaultMode="" tokens={<-- same pattern as described earlier --> } >

      {({ isDark, toggleTheme, themeClasses }) => (

          <div className={`${themeClasses.container} p-4`}>
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
```

| Prop            | Type                                                                                       | Default | Description                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **defaultMode** | `light` \| `dark` \| `inherit` \| `inherit-reverse`                                        | `light` | Starting theme mode. `inherit` matches the global theme,`inherit-reverse` uses the opposite of the global theme, and light / dark start with fixed modes. |
| **tokens**      | `{ light: Record<string, string>, dark: Record<string, string> }`                          | `{}`    | Theme token objects for light and dark modes.                                                                                                             |
| **children**    | `(theme: { isDark: boolean, toggleTheme: () => void, themeClasses: string }) => ReactNode` | —       | Render prop for rendering UI based on the current theme state.                                                                                            |

---

---

> ## **Theme Strategy Overview**

### When to Use Global State vs. Local State in Your UI

| Option              | Scope              | Best For                                                                                                     | Notes                                                                                                                                                    |
| ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useDarkTheme()`    | Global             | When you want the **entire application** to share the same theme state.                                      | Requires `ThemeProvider` at the app root. Perfect for dashboards, settings pages, or anything that needs synchronized dark/light mode across components. |
| `ThemedElement`     | Local              | When a single component or section needs its **own independent theme** (can differ from the global theme).   | Default mode can be `light`, `dark`, or `inherit` from the global theme. State is stored only in memory.                                                 |
| `ThemedElementSync` | Local (Persistent) | Same as `ThemedElement`, but works with `inherit` and `inherit-reverse` to initialize from the global state. | Great for widgets like code blocks or embedded previews where you want per-element theme initialization based on global settings but managed locally.    |

---

### 3. Theme Toggle

### The ThemeToggle component is a simple button (or icon) that lets users switch between light and dark modes.

### Usage Example :

```jsx
import { ThemeToggle, useDarkTheme } from "react-theme-snap";

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
```

> #### _More components may be added or enhanced in future versions of this package — such as theme-aware Card, Button, or Icon wrappers. This ensures the library remains flexible and extensible while keeping boilerplate low. Be sure to check the changelog or GitHub repo for updates and new releases!_

---

---

## FAQ

## **1. `tokens.dark` or `tokens.light` is not defined**

### Cause

#### This happens when your tokens object passed to `<ThemeProvider />` is missing the dark or light keys.

### Solution

#### Make sure your tokens object follows the correct structure.

```jsx
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
```

---

## 2. `useDarkTheme()` was used outside of the provider.

### Cause

#### The `useDarkTheme()` hook and the `ThemeComponentSync` only works inside components wrapped by `<ThemeProvider />`. If you try to call it outside, React will throw this error.

```jsx
const App = () => {

  const { isDark, toggleTheme, themeClasses } = useDarkTheme();             -----------> Wrong way of using the hook

  return (
    <ThemeProvider storageKey="my-theme" tokens={tokens}>

            <-- Content -->

    </ThemeProvider>
  );
};


```

### Solution

#### Ensure your component tree is wrapped with `<ThemeProvider />` at the top level:

### Usage Example :

```jsx
const Content = () => {
  const { isDark, toggleTheme, themeClasses } = useDarkTheme();

  return (
    <>
      <div
        className={`min-h-screen max-w-screen relative flex items-center justify-center ${themeClasses.container}`}
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
```

---

### Tips

#### If you still face issues, double-check:

- 1. Your `tokens` object has both `light` and `dark` modes.
- 2. Your hook and `ThemedComponentSync` usage is inside the `ThemeProvider`.
