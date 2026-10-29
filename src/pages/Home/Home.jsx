import Hero from '@/sections/Hero/Hero';
import About from '@/sections/About/About';
import Experience from '@/sections/Experience/Experience';
import Skills from '@/sections/Skills/Skills';
import Projects from '@/sections/Projects/Projects';
import Certificates from '@/sections/Certificates/Certificates';
import Contact from '@/sections/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}
