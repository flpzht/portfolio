import { useEffect, useState } from "react";

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

import { useLanguage } from "@/hooks/useLanguage";

import styles from "./Navbar.module.css";

const BRAND_NAME = "<Felipe />";

import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(navigationLinks[0].id);

  // Marca no menu a seção que cruza a linha a ~40% da altura da tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -59% 0px" }
    );

    navigationLinks.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header}>

      <nav className={styles.nav}>

        <a href="#" className={styles.logo} aria-label={t.nav.logoLabel}>{BRAND_NAME}</a>

        <ul className={styles.menu}>
          {navigationLinks.map(({ id, href }) => (
            <li key={id}>
              <a
                href={href}
                className={`${styles.link} ${activeId === id ? styles.current : ""}`}
                aria-current={activeId === id ? "location" : undefined}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

      </nav>
    </header>
  );
}
