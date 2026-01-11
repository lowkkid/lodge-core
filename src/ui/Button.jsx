import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({
  size = "medium",
  variation = "primary",
  children,
  isLink = false,
  ...props
}) {
  if (isLink) {
    return (
      <Link
        className={`${styles["button"]} ${styles[`button--${size}`]} ${
          styles[`button--${variation}`]
        }`}
        {...props}
      >
        {children}
      </Link>
    );
  }
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
