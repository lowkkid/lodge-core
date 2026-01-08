import styles from "./FormRowVertical.module.css";

function FormRowVertical({ label, error, children }) {
  return (
    <div className={styles["form-row"]}>
      {label && (
        <label htmlFor={children.props.id} className={styles["label"]}>
          {label}
        </label>
      )}
      {children}
      {error && <span className={styles["error"]}>{error}</span>}
    </div>
  );
}

export default FormRowVertical;
