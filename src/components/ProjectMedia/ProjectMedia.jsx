import { useEffect, useRef } from 'react';

/**
 * Mídia de um projeto: vídeo curto em loop (WebM/MP4) ou imagem animada.
 * O vídeo só toca quando está visível e fica parado com movimento reduzido.
 */
export default function ProjectMedia({ media, className }) {
  const videoRef = useRef(null);
  const isVideo = Boolean(media.mp4);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reduceMotion) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  if (!isVideo) {
    return (
      <img
        src={media.image}
        alt=""
        className={className}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      poster={media.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={media.webm} type="video/webm" />
      <source src={media.mp4} type="video/mp4" />
    </video>
  );
}
