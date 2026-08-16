import styles from "./Card.module.css";

export default function Card({
  image,
  title,
  description,
  children,
}) {
  return (
    <article className={styles.card}>
      {image && (
        <img
          src={image}
          alt={title}
          className={styles.image}
        />
      )}

      <div className={styles.content}>
        {title && (
          <h3 className={styles.title}>
            {title}
          </h3>
        )}

        {description && (
          <p className={styles.description}>
            {description}
          </p>
        )}

        {children}
      </div>
    </article>
  );
}
