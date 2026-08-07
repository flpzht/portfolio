import styles from './Footer.module.css';

const socialLinks = [
  {
    id: "github",

    label: "GitHub",

    href: "#",
  },

  {
    id: "linkedin",

    label: "LinkedIn",

    href: "#",
  },

  {
    id: "email",

    label: "Email",

    href: "mailto:email@email.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>
            {"<Felipe />"}
          </h2>

          <p className={styles.description}>
            Desenvolvedor Full Stack focado em criar aplicações modernas, acessíveis e de alta qualidade.
          </p>
        </div>

        <nav
          className={styles.navigation}
          aria-label="Redes sociais"
        >
          <ul className={styles.list}>
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.copy}>
          <p>
            &copy; {currentYear} Felipe Carvalho.
          </p>

          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
