import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';

import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />
      <About />
    </section>
  );
}
