import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        <h2 className={styles.title}>Contact</h2>

        <p className={styles.description}>Ficarei feliz em conversar sobre oportunidades, projetos ou trocar
          experiências sobre desenvolvimento de software.</p>
      </div>
    </section>
  );
}
