import { useEffect, useState } from "react";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleToggle() {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={handleToggle}
      aria-label={
        isDark
          ? "Ativar tema claro"
          : "Ativar tema escuro"
      }
      title={
        isDark
          ? "Ativar tema claro"
          : "Ativar tema escuro"
      }
    >
      <span aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
