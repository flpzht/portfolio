import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './Projects.module.css';

import { projects } from '@/data/projects';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div className={styles.container}>

        <h2 className={styles.title}>
          {t.projects.title}
        </h2>

        <div className={styles.grid}>

          {projects.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              title={t.projects.items[project.id].title}
              description={t.projects.items[project.id].description}
            >

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
                  <Button
                    key={repo.type}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects[repo.type]}
                  </Button>
                ))}

                {project.demo && (
                  <Button
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.demo}
                  </Button>
                )}

              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}
