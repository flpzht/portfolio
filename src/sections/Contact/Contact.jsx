import Button from '@/components/Button/Button';

import styles from './Contact.module.css';

const contacts = [
  {
    id: "github",
    title: "GitHub",
    description:
      "Confira meus projetos e contribuições.",
    href: "#",
    button: "Ver GitHub",
  },

  {
    id: "linkedin",
    title: "LinkedIn",
    description:
      "Conheça minha trajetória profissional.",
    href: "#",
    button: "Ver LinkedIn",
  },

  {
    id: "email",

    title: "Email",

    description:
      "Entre em contato diretamente por e-mail.",

    href: "mailto:email@email.com",

    button: "Enviar e-mail",
  },

  {
    id: "whatsapp",

    title: "WhatsApp",

    description:
      "Vamos conversar sobre oportunidades.",

    href: "#",

    button: "Enviar mensagem",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          Contact
        </h2>

        <p className={styles.subtitle}>
          Gostou do meu trabalho? Vamos conversar.
        </p>

        <div className={styles.grid}>
          {contacts.map((contact) => (
            <article
              key={contact.id}
              className={styles.card}
            >
              <h3 className={styles.cardTitle}>
                {contact.title}
              </h3>

              <p className={styles.cardDescription}>
                {contact.description}
              </p>

              <Button href={contact.href}>
                {contact.button}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
