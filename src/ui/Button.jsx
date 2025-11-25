import styles from "./Button.module.css";

function Button({
  size = "medium",
  variation = "primary",
  children,
  ...props
}) {
  return (
    <button
      className={`${styles["button"]} ${styles[`button--${size}`]} ${
        styles[`button--${variation}`]
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
