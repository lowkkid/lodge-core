import styles from "./Flag.module.css";

export function Flag({ className, ...props }) {
  return <img className={`${styles["flag"]} ${className || ""}`} {...props} />;
}
