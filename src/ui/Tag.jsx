import styles from "./Tag.module.css";

function Tag({ type, children }) {
  const typeClass =
    type === "blue"
      ? styles["tag--blue"]
      : type === "green"
        ? styles["tag--green"]
        : type === "silver"
          ? styles["tag--silver"]
          : "";

  return <span className={`${styles.tag} ${typeClass}`}>{children}</span>;
}

export default Tag;
