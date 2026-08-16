import Card from '@/components/Card/Card';

import styles from './Skills.module.css';

import { skills } from '@/data/skills';

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
