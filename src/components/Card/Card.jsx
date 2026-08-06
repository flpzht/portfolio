import styles from "./Card.module.css";

export default function Card({
  image,
  title,
  description,
  children,
}) {
  return (
    <article className={styles.card}>

      <img
        className={styles.image}
        src={image}
        alt={title}
      />

      <div className={styles.content}>

        <h3 className={styles.title}>
          {title}
        </h3>

        <p className={styles.description}>
          {description}
        </p>

        {children}

      </div>

    </article>
  );
}
