# react-theme-snap

A seamless way to add dark mode support to your React app using Tailwind CSS.
With just a few lines of code, you can integrate a Theme Provider, a ready-made toggle button, and a powerful hook to manage user preferences and system themes.

---

## 📦 Installation

```bash
npm install react-theme-snap
```

## ThemeProvider

The `ThemeProvider` is the core wrapper component that enables theme toggling in your React app.
It handles **initial theme detection** (based on system preference), **persists the user's choice**, and **makes theme utilities accessible** throughout the component tree.

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
