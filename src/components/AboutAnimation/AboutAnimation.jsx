import { useState, useEffect, useRef, useCallback } from 'react';

import styles from '@/components/AboutAnimation/AboutAnimation.module.css';

import imageDev from '@/assets/images/about/imagem-dev.png';
import imageFin from '@/assets/images/about/imagem-fin.png';

export default function AboutAnimation() {

  const [sliderPosition, setSliderPosition] = useState(50); // Posição em porcentagem (0 a 100)
  const [containerWidth, setContainerWidth] = useState(0);
  const isDragging = useRef(false);

  const containerRef = useRef(null);

  // Atualiza a largura da imagem sobreposta com base no container
  const updateImageWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  // Calcula a nova posição do slider
  const moveSlider = useCallback((clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let position = clientX - rect.left;

    if (position < 0) position = 0;
    if (position > rect.width) position = rect.width;

    const percentage = (position / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  // Handlers para início de arraste
  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  // Efeito para registrar/remover os ouvintes de eventos globais
  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      moveSlider(e.clientX);
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      moveSlider(e.touches[0].clientX);
    };

    const handleResize = () => {
      updateImageWidth();
    };

    // Ouvintes globais
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', handleResize);

    // Inicializa a largura do container
    updateImageWidth();

    // Limpeza de listeners ao desmontar o componente
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [moveSlider, updateImageWidth]);

  return (
    <div className={styles.sliderContainer} id='sliderContainer' ref={containerRef}>

      <span className={styles.badge + ' ' + styles.badgeLeft}>Economista</span>
      <span className={styles.badge + ' ' + styles.badgeRight}>Full Stack Dev</span>

      <img src={imageDev} alt="Desenvolvedor Full Stack" className={styles.imgBackground} />

      <div className={styles.imgForegroundWrapper} id='foregroundWrapper' style={{ width: `${sliderPosition}%` }}>
        <img src={imageFin} alt="Economista FP&A" className={styles.imgForeground} id='imgForeground' style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}/>
      </div>

      <div className={styles.sliderHandle} id='sliderHandle'
      style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}>
        <div className={styles.sliderButton}>
          &#8594;&#8592;
        </div>
      </div>

    </div>
  );
}
