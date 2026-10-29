import AboutAnimation from '@/components/AboutAnimation/AboutAnimation';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>

        <div className={styles.image}>
          <AboutAnimation />
        </div>

        <div className={styles.content}>

          <h2 className={styles.title}>{t.about.title}</h2>

          <p className={styles.description}>{t.about.p1}</p>
          <p className={styles.description}>{t.about.p2}</p>

          <div className={styles.description}>
            {t.about.listIntro}
            <ul className={styles.list}>
              {t.about.items.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.description}>{t.about.p3}</p>
        </div>
      </div>
    </section>
  );
}
