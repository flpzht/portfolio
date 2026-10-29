import Button from '@/components/Button/Button';

import { useLanguage } from '@/hooks/useLanguage';

import styles from './Contact.module.css';

import { contacts } from '@/data/contacts';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className={styles.contact}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t.contact.title}
        </h2>

        <p className={styles.subtitle}>
          {t.contact.subtitle}
        </p>

        <div className={styles.grid}>
          {contacts.map((contact) => {
            const text = t.contact.items[contact.id];

            return (
              <article
                key={contact.id}
                className={styles.card}
              >
                <h3 className={styles.cardTitle}>
                  {text.title}
                </h3>

                <p className={styles.cardDescription}>
                  {text.description}
                </p>

                <Button href={contact.href} className={styles.contactButton}>
                  {text.button}
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
