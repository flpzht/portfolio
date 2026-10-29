import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/useLanguage";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { t } = useLanguage();

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
          ? t.theme.toLight
          : t.theme.toDark
      }
      title={
        isDark
          ? t.theme.toLight
          : t.theme.toDark
      }
    >
      <span aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
