import { useLanguage } from '@/hooks/useLanguage';

import styles from './Certificates.module.css';

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          {t.certificates.title}
        </h2>

        <div className={styles.grid}>
          {t.certificates.items.map((item) => (
            <article key={item.title} className={styles.card}>

              <p className={styles.type}>{item.type}</p>

              <h3 className={styles.cardTitle}>{item.title}</h3>

              <p className={styles.institution}>{item.institution}</p>

              <p className={styles.details}>{item.details}</p>

              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
