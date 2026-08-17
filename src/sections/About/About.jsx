import AboutAnimation from '@/components/AboutAnimation/AboutAnimation';

import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.container}>

        <div className={styles.image}>
          <AboutAnimation />
        </div>

        <div className={styles.content}>

          <h2 className={styles.title}>Sobre mim</h2>

          <p className={styles.description}>
            Economista de formação, construí minha trajetória profissional analisando dados,
            otimizando processos em FP&A/Controladoria e gerando inteligência de negócios (BI).
            Essa vivência me deu uma base sólida para resolver problemas complexos e entender o impacto real da tecnologia no negócio.
          </p>
          <p className={styles.description}>
            Hoje, canalizo essa capacidade analítica para a engenharia de software, construindo soluções completas no ecossistema Web.
          </p>
          <p className={styles.description}>
            O que estou construindo e estudando:
            <ul className={styles.list}>
              <li><strong>Front-end:</strong> Interfaces modernas, responsivas e acessíveis com React, JavaScript (ES6+) e CSS3.</li>
              <li><strong>Back-end:</strong> APIs e serviços com Node.js e arquitetura limpa.</li>
              <li><strong>Boas práticas:</strong> Clean Code, versionamento estruturado com Git e código escalável.</li>
            </ul>
          </p>
          <p className={styles.description}>
            Busco oportunidades como Desenvolvedor para somar visão estratégica de negócio com entrega técnica de valor.
          </p>
        </div>
      </div>
    </section>
  );
}
