import { useCallback, useEffect, useRef } from 'react';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './AboutAnimation.module.css';

import imageDev from '@/assets/images/about/imagem-dev.webp';
import imageFin from '@/assets/images/about/imagem-fin.webp';

const INITIAL_POSITION = 50; // porcentagem (0 a 100)
const AUTOPLAY_SPEED = 0.012; // porcentagem por milissegundo
const AUTOPLAY_RESUME_DELAY_MS = 2000; // espera após interação do usuário
const KEYBOARD_STEP = 5;

const clamp = (value) => Math.min(100, Math.max(0, value));

export default function AboutAnimation() {
  const { t } = useLanguage();

  const containerRef = useRef(null);
  const foregroundRef = useRef(null);
  const handleRef = useRef(null);

  const positionRef = useRef(INITIAL_POSITION);
  const directionRef = useRef(1); // 1 = direita, -1 = esquerda
  const isDraggingRef = useRef(false);
  const resumeAtRef = useRef(0);

  // A posição é aplicada direto no DOM para evitar re-render a cada frame.
  const applyPosition = useCallback((position, announce = false) => {
    positionRef.current = position;

    if (foregroundRef.current) {
      foregroundRef.current.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
    }

    if (handleRef.current) {
      handleRef.current.style.left = `${position}%`;

      if (announce) {
        handleRef.current.setAttribute('aria-valuenow', String(Math.round(position)));
      }
    }
  }, []);

  const pauseAutoplay = useCallback(() => {
    resumeAtRef.current = performance.now() + AUTOPLAY_RESUME_DELAY_MS;
  }, []);

  // Animação automática: só roda com a seção visível e sem prefers-reduced-motion.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let frameId = null;
    let lastTime = null;
    let isVisible = false;

    const tick = (now) => {
      const elapsed = lastTime === null ? 0 : now - lastTime;
      lastTime = now;

      if (!isDraggingRef.current && now >= resumeAtRef.current) {
        let next = positionRef.current + AUTOPLAY_SPEED * elapsed * directionRef.current;

        if (next >= 100) {
          next = 100;
          directionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }

        applyPosition(next);
      }

      frameId = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
      lastTime = null;
    };

    const update = () => {
      if (isVisible && !motionQuery.matches) {
        if (frameId === null) frameId = requestAnimationFrame(tick);
      } else {
        stop();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      update();
    });

    observer.observe(container);
    motionQuery.addEventListener('change', update);

    return () => {
      stop();
      observer.disconnect();
      motionQuery.removeEventListener('change', update);
    };
  }, [applyPosition]);

  const moveToPointer = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;

    const percentage = ((clientX - rect.left) / rect.width) * 100;
    applyPosition(clamp(percentage), true);
  }, [applyPosition]);

  const handlePointerDown = (event) => {
    isDraggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveToPointer(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!isDraggingRef.current) return;
    moveToPointer(event.clientX);
  };

  const handlePointerEnd = () => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    pauseAutoplay();
  };

  const handleKeyDown = (event) => {
    const current = positionRef.current;
    let next = null;

    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') next = current - KEYBOARD_STEP;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') next = current + KEYBOARD_STEP;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = 100;

    if (next === null) return;

    event.preventDefault();
    pauseAutoplay();
    applyPosition(clamp(next), true);
  };

  return (
    <div
      className={styles.sliderContainer}
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
    >
      <span className={`${styles.badge} ${styles.badgeLeft}`}>{t.about.badgeLeft}</span>
      <span className={`${styles.badge} ${styles.badgeRight}`}>{t.about.badgeRight}</span>

      <img
        src={imageDev}
        alt={t.about.altDev}
        className={styles.image}
        width="800"
        height="800"
        loading="lazy"
        decoding="async"
        draggable={false}
      />

      <div
        ref={foregroundRef}
        className={styles.foreground}
        style={{ clipPath: `inset(0 ${100 - INITIAL_POSITION}% 0 0)` }}
      >
        <img
          src={imageFin}
          alt={t.about.altFin}
          className={styles.image}
          width="800"
          height="800"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>

      <div
        ref={handleRef}
        className={styles.handle}
        style={{ left: `${INITIAL_POSITION}%` }}
        role="slider"
        tabIndex={0}
        aria-label={t.about.sliderLabel}
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={INITIAL_POSITION}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.button} aria-hidden="true">
          &#8594;&#8592;
        </div>
      </div>
    </div>
  );
}
