import styles from "./Navbar.module.css";

const BRAND_NAME = "<Felipe />";

const navigationLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>

      <nav className={styles.nav}>

        <a href="#hero" className={styles.logo} aria-label="Ir para o topo da página">{BRAND_NAME}</a>

        <ul className={styles.menu}>
          {navigationLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {'🌙'}
          {'🌐'}
        </div>

      </nav>
    </header>
  );
}
