import { useLanguage } from '@/hooks/useLanguage';

import styles from './Experience.module.css';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          {t.experience.title}
        </h2>

        <ol className={styles.timeline}>
          {t.experience.items.map((item) => (
            <li key={`${item.company}-${item.period}`} className={styles.item}>

              <p className={styles.period}>{item.period}</p>

              <h3 className={styles.role}>{item.role}</h3>

              <p className={styles.company}>
                {item.company}
                {item.meta && (
                  <span className={styles.meta}> · {item.meta}</span>
                )}
              </p>

              {item.earlier && (
                <p className={styles.earlier}>{item.earlier}</p>
              )}

              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}

              {item.bullets && (
                <ul className={styles.bullets}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
