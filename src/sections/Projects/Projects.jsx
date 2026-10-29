import { useRef, useState } from 'react';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './Projects.module.css';

import { projects } from '@/data/projects';

const canHover = () =>
  window.matchMedia('(hover: hover) and (min-width: 769px)').matches;

export default function Projects() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const panels = useRef([]);

  const focusPanel = (index) => {
    const next = (index + projects.length) % projects.length;
    panels.current[next]?.focus();
  };

  const handleKeyDown = (event, index) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      focusPanel(index + 1);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      focusPanel(index - 1);
    }
  };

  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div className={styles.container}>

        <h2 className={styles.title}>
          {t.projects.title}
        </h2>

        <div className={styles.accordion}>

          {projects.map((project, index) => {
            const isActive = index === active;
            const text = t.projects.items[project.id];

            return (
              <div
                key={project.id}
                ref={(node) => { panels.current[index] = node; }}
                className={`${styles.panel} ${isActive ? styles.active : ''}`}
                tabIndex={0}
                role="group"
                aria-label={text.title}
                onMouseEnter={() => { if (canHover()) setActive(index); }}
                onClick={() => setActive(index)}
                onFocus={(event) => { if (event.target === event.currentTarget) setActive(index); }}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <img
                  src={project.image}
                  alt=""
                  className={styles.image}
                  loading="lazy"
                  decoding="async"
                />

                <span className={styles.tag} aria-hidden="true">
                  <span>{text.title}</span>
                </span>

                <div className={styles.info} inert={!isActive}>

                  <h3 className={styles.projectTitle}>
                    {text.title}
                  </h3>

                  <p className={styles.description}>
                    {text.description}
                  </p>

                  <ul className={styles.technologies}>
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className={styles.technology}
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.actions}>

                    {project.repos.map((repo) => (
                      <a
                        key={repo.type}
                        href={repo.href}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects[repo.type]}
                      </a>
                    ))}

                    {project.demo && (
                      <a
                        href={project.demo}
                        className={styles.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.demo}
                      </a>
                    )}

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
