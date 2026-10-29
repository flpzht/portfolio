import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Experience from '@/sections/Experience/Experience';
import Skills from '@/sections/Skills/Skills';
import Projects from '@/sections/Projects/Projects';
import Certificates from '@/sections/Certificates/Certificates';
import Contact from '@/sections/Contact/Contact';

import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </section>
  );
}
