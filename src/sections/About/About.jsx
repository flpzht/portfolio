import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>

        <div className={styles.image}>{/* Em desenvolvimento */}</div>

        <div className={styles.content}>

          <h2 className={styles.title}>Sobre mim</h2>

          <p className={styles.description}>
            Economista com experiência em FP&A, Controladoria e Business
            Intelligence, atualmente em transição para Desenvolvimento
            Full Stack.
          </p>
          <p className={styles.description}>
            Atualmente estudo React, JavaScript, Node.js e boas práticas de
            desenvolvimento, buscando criar aplicações escaláveis, acessíveis e
            com excelente experiência para o usuário.
          </p>
        </div>
      </div>
    </section>
  );
}
