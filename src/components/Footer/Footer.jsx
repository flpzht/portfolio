import { useLanguage } from '@/hooks/useLanguage';

import styles from './Footer.module.css';

import { socialLinks } from '@/data/socialLinks';

const icons = {
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12v5.88h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74v5.29h-4V9.75Z" />
  ),
  email: (
    <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.6 6.1L19.6 7H4.4ZM4 8.7V17h16V8.7l-7.38 5.9a1 1 0 0 1-1.24 0L4 8.7Z" />
  ),
};

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.waves} aria-hidden="true">
        <svg
          className={styles.svg}
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="footer-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className={styles.parallax}>
            <use href="#footer-wave" x="48" y="0" />
            <use href="#footer-wave" x="48" y="3" />
            <use href="#footer-wave" x="48" y="5" />
            <use href="#footer-wave" x="48" y="7" />
          </g>
        </svg>
      </div>

      <div className={styles.content}>
        <ul className={styles.social} aria-label={t.footer.socialLabel}>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target={link.id === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={styles.icon}
                aria-label={link.label}
                title={link.label}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {icons[link.id]}
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.description}>{t.footer.description}</p>

        <p className={styles.copy}>
          &copy; {currentYear} Felipe Carvalho. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
