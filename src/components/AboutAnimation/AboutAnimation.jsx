import { useState, useEffect, useRef, useCallback } from 'react';

import styles from '@/components/AboutAnimation/AboutAnimation.module.css';

import imageDev from '@/assets/images/about/imagem-dev.png';
import imageFin from '@/assets/images/about/imagem-fin.png';

export default function AboutAnimation() {
  const [sliderPosition, setSliderPosition] = useState(50); // Posição em porcentagem (0 a 100)
  const [containerWidth, setContainerWidth] = useState(0);

  const isDragging = useRef(false);
  const containerRef = useRef(null);

  // --- CONFIGURAÇÃO DA ANIMAÇÃO AUTOMÁTICA ---
  const isAutoPlaying = useRef(true); // Controla se o autoplay está ativo
  const animationFrameId = useRef(null);
  const directionRef = useRef(1); // 1 = movendo para a direita, -1 = movendo para a esquerda
  const speed = 0.2; // Velocidade da animação (ajuste conforme necessário)
  const autoPlayDelayMs = 2000; // Tempo de espera para retomar o autoplay após o usuário soltar (2s)
  const resumeTimeoutRef = useRef(null);

  // Função que executa o loop da animação
  const animate = useCallback(() => {
    if (isAutoPlaying.current && !isDragging.current) {
      setSliderPosition((prevPos) => {
        let nextPos = prevPos + speed * directionRef.current;

        // Inverte a direção ao atingir os limites (ex: 10% e 90% para não bater nas bordas)
        if (nextPos >= 100) {
          nextPos = 100;
          directionRef.current = -1;
        } else if (nextPos <= 0) {
          nextPos = 0;
          directionRef.current = 1;
        }

        return nextPos;
      });
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  // Inicia o loop de animação
  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate]);

  // Atualiza a largura da imagem sobreposta
  const updateImageWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  // Calcula a nova posição do slider no arrasto do usuário
  const moveSlider = useCallback((clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let position = clientX - rect.left;

    if (position < 0) position = 0;
    if (position > rect.width) position = rect.width;

    const percentage = (position / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  // Pausa a animação ao iniciar o arrasto
  const handleStartDrag = () => {
    isDragging.current = true;
    isAutoPlaying.current = false;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseDown = () => handleStartDrag();
  const handleTouchStart = () => handleStartDrag();

  // Efeito global de listeners e retomada do autoplay
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        // Retoma a animação automática após o tempo definido
        resumeTimeoutRef.current = setTimeout(() => {
          isAutoPlaying.current = true;
        }, autoPlayDelayMs);
      }
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      moveSlider(e.clientX);
    };

    const handleTouchEnd = () => {
      if (isDragging.current) {
        isDragging.current = false;
        resumeTimeoutRef.current = setTimeout(() => {
          isAutoPlaying.current = true;
        }, autoPlayDelayMs);
      }
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      moveSlider(e.touches[0].clientX);
    };

    const handleResize = () => {
      updateImageWidth();
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', handleResize);

    updateImageWidth();

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [moveSlider, updateImageWidth]);

  return (
    <div className={styles.sliderContainer} id='sliderContainer' ref={containerRef}>
      <span className={styles.badge + ' ' + styles.badgeLeft}>Economista</span>
      <span className={styles.badge + ' ' + styles.badgeRight}>Full Stack Dev</span>

      <img src={imageDev} alt="Desenvolvedor Full Stack" className={styles.imgBackground} />

      <div className={styles.imgForegroundWrapper} id='foregroundWrapper' style={{ width: `${sliderPosition}%` }}>
        <img
          src={imageFin}
          alt="Economista FP&A"
          className={styles.imgForeground}
          id='imgForeground'
          style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
        />
      </div>

      <div
        className={styles.sliderHandle}
        id='sliderHandle'
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className={styles.sliderButton}>
          &#8594;&#8592;
        </div>
      </div>
    </div>
  );
}
