import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

import { useLanguage } from "@/hooks/useLanguage";

import styles from "./Navbar.module.css";

const BRAND_NAME = "<Felipe />";

import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className={styles.header}>

      <nav className={styles.nav}>

        <a href="#" className={styles.logo} aria-label={t.nav.logoLabel}>{BRAND_NAME}</a>

        <ul className={styles.menu}>
          {navigationLinks.map(({ id, href }) => (
            <li key={id}>
              <a href={href} className={styles.link}>
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
