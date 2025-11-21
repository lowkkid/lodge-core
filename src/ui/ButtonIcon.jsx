import styles from "./ButtonIcon.module.css";

function ButtonIcon({ children, ...props }) {
  return (
    <button className={styles.buttonIcon} {...props}>
      {children}
    </button>
  );
}

export default ButtonIcon;
