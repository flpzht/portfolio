import { useRef } from 'react';

import Button from '@/components/Button/Button';

import { useLanguage } from '@/hooks/useLanguage';

import { resumes } from '@/data/resume';

import styles from './Hero.module.css';

import heroImg from '@/assets/images/hero/hero-img.webp';

export default function Hero() {
  const { language, t } = useLanguage();
  const resume = resumes[language];
  const tiltRef = useRef(null);

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    tiltRef.current?.style.setProperty('--rx', `${(-y * 10).toFixed(2)}deg`);
    tiltRef.current?.style.setProperty('--ry', `${(x * 12).toFixed(2)}deg`);
  };

  const handlePointerLeave = () => {
    tiltRef.current?.style.setProperty('--rx', '0deg');
    tiltRef.current?.style.setProperty('--ry', '0deg');
  };

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
            <Button
              href={resume.href}
              download={resume.fileName}
              variant="secondary"
            >
              {t.hero.resumeButton}
            </Button>
          </div>
        </div>

        <div
          className={styles.image}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <span className={styles.halo} aria-hidden="true" />

          <div ref={tiltRef} className={styles.tilt}>
            <img
              src={heroImg}
              alt={t.hero.imageAlt}
              width={800}
              height={785}
              fetchPriority="high"
              decoding="async"
              className={styles.figure}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
