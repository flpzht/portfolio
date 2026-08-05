import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>

      <nav className={styles.nav}>

        <a href="#hero" className={styles.logo} aria-label="Ir para o topo da página">{'<Felipe />'}</a>

        <ul className={styles.menu}>
          <li><a href="#hero" className={styles.link}>Home</a></li>
          <li><a href="#about" className={styles.link}>About</a></li>
          <li><a href="#skills" className={styles.link}>Skills</a></li>
          <li><a href="#projects" className={styles.link}>Projects</a></li>
          <li><a href="#contact" className={styles.link}>Contact</a></li>
        </ul>

        <div className={styles.actions}>
          {/* ThemeToggle */ }
          {/* LanguageToggle */ }
        </div>

      </nav>
    </header>
  );
}
