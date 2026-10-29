import { useEffect, useRef } from 'react';

import styles from './Background.module.css';

const MIN_PETALS = 8;
const MAX_PETALS = 16;

const random = (min, max) => min + Math.random() * (max - min);

const createPetal = (width, height) => ({
  size: random(12, 28),
  x: random(0, width),
  y: random(0, height),
  vx: random(0.35, 0.9),
  vy: random(0.08, 0.3),
  phase: random(0, Math.PI * 2),
  spin: random(-0.3, 0.3),
  rotation: random(0, 360),
});

export default function Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let petals = [];
    let nodes = [];
    let frame = 0;
    let lastWidth = width;

    const build = () => {
      lastWidth = window.innerWidth;
      width = window.innerWidth;
      height = window.innerHeight;

      const total = Math.round(
        Math.min(MAX_PETALS, Math.max(MIN_PETALS, width / 90)),
      );

      container.replaceChildren();

      petals = Array.from({ length: total }, () => createPetal(width, height));

      nodes = petals.map((petal) => {
        const node = document.createElement('span');
        const shape = document.createElement('i');

        node.className = styles.petal;
        node.style.width = `${petal.size}px`;
        node.style.height = `${petal.size * 0.7}px`;
        node.appendChild(shape);
        container.appendChild(node);

        return node;
      });
    };

    const render = (time) => {
      petals.forEach((petal, index) => {
        if (!reduceMotion) {
          petal.x += petal.vx;
          petal.y += petal.vy + Math.sin(time * 0.0011 + petal.phase) * 0.25;
          petal.rotation += petal.spin;
        }

        if (petal.x > width + 30) {
          petal.x = -30;
          petal.y = random(0, height * 0.9);
        }

        if (petal.y > height + 20) petal.y = -20;

        nodes[index].style.transform =
          `translate3d(${petal.x.toFixed(1)}px, ${petal.y.toFixed(1)}px, 0) rotate(${petal.rotation.toFixed(1)}deg)`;
      });
    };

    const tick = (time) => {
      render(time);
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (reduceMotion || frame) return;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // No celular a barra de endereço altera só a altura ao rolar:
    // reconstruir apenas quando a largura muda evita as pétalas "pularem".
    const handleResize = () => {
      if (window.innerWidth !== lastWidth) {
        build();
        render(0);
      } else {
        height = window.innerHeight;
      }
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    build();
    render(0);
    start();

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stop();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.background}
      aria-hidden="true"
    />
  );
}
