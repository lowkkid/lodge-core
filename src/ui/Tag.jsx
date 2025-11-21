import styles from "./Tag.module.css";

function Tag({ type, children }) {
  const typeClass =
    type === "blue"
      ? styles.tagBlue
      : type === "green"
      ? styles.tagGreen
      : type === "silver"
      ? styles.tagSilver
      : "";

  return <span className={`${styles.tag} ${typeClass}`}>{children}</span>;
}

export default Tag;
