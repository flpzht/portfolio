import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/useLanguage";

import styles from "./ThemeToggle.module.css";

const THEME_COLORS = { dark: "#3e3239", light: "#f7efe7" };

function getInitialTheme() {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export default function ThemeToggle() {
  const { t } = useLanguage();

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);

    try {
      localStorage.setItem("theme", theme);
    } catch {
      // localStorage indisponível: a preferência vale só nesta sessão
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);
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
