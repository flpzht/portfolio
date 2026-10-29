import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  type = "button",
  onClick,
  target,
  rel,
  download,
  variant = "primary",
  className = '',
}) {
  className = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={target}
        rel={rel}
        download={download}
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
