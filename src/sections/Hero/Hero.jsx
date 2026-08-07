import styles from './Hero.module.css';

import heroImg from '@/assets/images/hero-img.png';

export default function Hero() {
  return (
    <section id='hero' className={styles.hero}>

      <div className={styles.container}>
        <div className={styles.content}>

          <p className={styles.greeting}>Olá, sou</p>

          <h1 className={styles.name}>Felipe</h1>

          <h2 className={styles.role}>Full Stack Developer</h2>

          <p className={styles.description}>Desenvolvedor apaixonado por criar interfaces modernas,
            acessíveis e performáticas utilizando React, JavaScript e
            tecnologias web.
          </p>

          <div className={styles.buttons}>
            {/*Em desenvolvimento*/}
          </div>
        </div>
        <div className={styles.image}>
          {heroImg && <img src={heroImg} alt='Imagem do desenvolvedor' /> }
        </div>

      </div>
    </section>
  );
}
