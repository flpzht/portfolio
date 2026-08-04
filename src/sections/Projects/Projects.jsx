import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.description}>Alguns dos projetos que desenvolvi para praticar e aprimorar minhas habilidades em desenvolvimento Full Stack.</p>
      </div>
    </section>
  );
}
