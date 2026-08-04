import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Skills from '@/sections/Skills/Skills';
import Projects from '@/sections/Projects/Projects';
import Contact from '@/sections/Contact/Contact';

import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}
