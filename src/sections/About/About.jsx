import { section } from 'framer-motion/client';
import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>

        <h2 className={styles.title}>Sobre mim</h2>

        <p className={styles.description}>
          Olá! Meu nome é Felipe. Sou economista em transição de carreira para o desenvolvimento
          Full Stack, apaixonado por tecnologia, interfaces modernas e
          desenvolvimento de aplicações web.
        </p>
        <p className={styles.description}>
          Atualmente estudo React, JavaScript, Node.js e boas práticas de
          desenvolvimento, buscando criar aplicações escaláveis, acessíveis e
          com excelente experiência para o usuário.
        </p>
      </div>
    </section>
  );
}
