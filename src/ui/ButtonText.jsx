import styles from "./ButtonText.module.css";

function ButtonText({ children, ...props }) {
  return (
    <button className={styles.buttonText} {...props}>
      {children}
    </button>
  );
}

export default ButtonText;
