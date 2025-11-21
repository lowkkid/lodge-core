import styles from "./Select.module.css";

function Select({ type, className, ...props }) {
  return (
    <select
      className={`${styles["select"]} ${
        type === "white" ? styles["selectWhite"] : ""
      } ${className || ""}`}
      {...props}
    />
  );
}

export default Select;
