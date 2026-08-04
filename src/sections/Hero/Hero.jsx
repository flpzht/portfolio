import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id='home' className={styles.hero}>

      <div className={styles.container}>

        <p className={styles.greeting}>Olá, eu sou</p>

        <h1 className={styles.name}>Felipe</h1>

        <h2 className={styles.role}>Full Stack Developer</h2>

        <p className={styles.description}>Desenvolvedor apaixonado por criar interfaces modernas,
          acessíveis e performáticas utilizando React, JavaScript e
          tecnologias web.</p>

      </div>
    </section>
  );
}
