import Button from '@/components/Button/Button';

import styles from './Hero.module.css';

import heroImg from '@/assets/images/hero/hero-img.png';

export default function Hero() {
  return (
    <section id='hero' className={styles.hero}>

      <div className={styles.container}>
        <div className={styles.content}>

          <p className={styles.greeting}>Olá, sou</p>

          <h1 className={styles.name}>Felipe Carvalho</h1>

          <p className={styles.role}>Full Stack Developer</p>

          <p className={styles.description}>
            Desenvolvedor apaixonado por criar interfaces modernas,
            acessíveis e performáticas utilizando React, JavaScript e
            tecnologias web.
          </p>

          <div className={styles.buttons}>
            <Button href="#projects">Ver projetos</Button>
            <Button href="#contact" variant="secondary">
              Entrar em contato
            </Button>
          </div>
        </div>

        <div className={styles.image}>
          <img
            src={heroImg}
            alt="Felipe Carvalho, desenvolvedor Full Stack"
          />
        </div>

      </div>
    </section>
  );
}
