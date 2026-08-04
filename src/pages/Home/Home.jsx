import Hero from '@/sections/Hero/Hero';

import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />
    </section>
  );
}
