import Card from '@/components/Card/Card';

import styles from './Skills.module.css';

import frontendIcon from '@/assets/icons/frontendIcon.svg';
import backendIcon from '@/assets/icons/backendIcon.svg';
import databaseIcon from '@/assets/icons/databaseIcon.svg';
import devtoolsIcon from '@/assets/icons/devtoolsIcon.svg';


const skills = [
  {
    id: "frontend",

    image: frontendIcon,

    title: "Front-End",

    description:
      "Tecnologias para desenvolvimento de interfaces.",

    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",

    image: backendIcon,

    title: "Back-End",

    description:
      "Construção de APIs e serviços.",

    items: [
      "Node.js",
      "Express",
      "JWT",
      "REST API",
    ],
  },
  {
    id: "database",

    image: databaseIcon,

    title: "Database",

    description:
      "Databases e serviços.",

    items: [
      "MongoDB",
      "MySQL",
      "SQL",
    ],
  },
  {
    id: "tools",

    image: devtoolsIcon,
    title: "Tools",
    description:
      "Ferramentas de programação.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Postman",
    ],
  },
];

export default function Skills() {

  return (

    <section
      id="skills"
      className={styles.skills}
    >
      <div className={styles.container}>

        <h2 className={styles.title}>
          Skills
        </h2>

        <div className={styles.grid}>

          {skills.map((skill) => (
            <Card
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            >
              <ul className={styles.list}>

                {skill.items.map((item) => (
                  <li
                    key={item}
                    className={styles.item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
