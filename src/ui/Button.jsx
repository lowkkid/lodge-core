import styles from "./Button.module.css";

function Button({ size, variation, children }) {
  return (
    <button
      className={`${styles["button"]} ${styles[`button--${size}`]} ${
        styles[`button--${variation}`]
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
