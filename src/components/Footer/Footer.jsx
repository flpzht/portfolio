import { useLanguage } from '@/hooks/useLanguage';

import styles from './Footer.module.css';

import { socialLinks } from '@/data/socialLinks';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>
            {"<Felipe />"}
          </h2>

          <p className={styles.description}>
            {t.footer.description}
          </p>
        </div>

        <nav
          className={styles.navigation}
          aria-label={t.footer.socialLabel}
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

          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
