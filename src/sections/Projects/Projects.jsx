import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';

import styles from './Projects.module.css';

import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.projects}
    >
      <div className={styles.container}>

        <h2 className={styles.title}>
          Projects
        </h2>

        <div className={styles.grid}>

          {projects.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
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

                <Button
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>

                <Button
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>

              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}
