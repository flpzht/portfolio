import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/useLanguage";

import styles from "./ThemeToggle.module.css";

const THEME_COLORS = { dark: "#3e3239", light: "#f7efe7" };

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");

    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // localStorage indisponível: segue a preferência do sistema
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function ThemeToggle() {
  const { t } = useLanguage();

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  function handleToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);

    // Só grava quando a pessoa escolhe; sem escolha, segue o sistema
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // localStorage indisponível: a preferência vale só nesta sessão
    }
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
