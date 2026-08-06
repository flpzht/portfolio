import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}) {
  return (
    <a
      className={styles.button}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
