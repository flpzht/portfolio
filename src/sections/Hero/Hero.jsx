import Button from '@/components/Button/Button';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './Hero.module.css';

import heroImg from '@/assets/images/hero/hero-img.png';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id='hero' className={styles.hero}>

      <div className={styles.container}>
        <div className={styles.content}>

          <p className={styles.greeting}>{t.hero.greeting}</p>

          <h1 className={styles.name}>Felipe Carvalho</h1>

          <p className={styles.role}>{t.hero.role}</p>

          <p className={styles.description}>
            {t.hero.description}
          </p>

          <div className={styles.buttons}>
            <Button href="#projects">{t.hero.projectsButton}</Button>
            <Button href="#contact" variant="secondary">
              {t.hero.contactButton}
            </Button>
          </div>
        </div>

        <div className={styles.image}>
          <img
            src={heroImg}
            alt={t.hero.imageAlt}
          />
        </div>

      </div>
    </section>
  );
}
