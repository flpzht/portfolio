import Card from '@/components/Card/Card';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './Skills.module.css';

import { skills } from '@/data/skills';

export default function Skills() {
  const { t } = useLanguage();

  return (

    <section
      id="skills"
      className={styles.skills}
    >
      <div className={styles.container}>

        <h2 className={styles.title}>
          {t.skills.title}
        </h2>

        <div className={styles.grid}>

          {skills.map((skill) => (
            <Card
              key={skill.id}
              image={skill.image}
              title={t.skills.groups[skill.id].title}
              description={t.skills.groups[skill.id].description}
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
