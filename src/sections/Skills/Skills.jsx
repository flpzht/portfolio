import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Front-End",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back-End",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "MySQL",
      "SQL",
    ],
  },
  {
    title: "Tools",
    skills: [
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
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>

        <h2 className={styles.title}>
          Skills
        </h2>

        <div className={styles.grid}>
          {skillCategories.map(({ title, skills }) => (
            <article
              key={title}
              className={styles.card}
            >
              <h3 className={styles.cardTitle}>
                {title}
              </h3>

              <ul className={styles.list}>
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className={styles.item}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
