import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  type = "button",
  onClick,
  target,
  rel,
  variant = "primary",
}) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
