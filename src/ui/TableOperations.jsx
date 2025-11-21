import styles from "./TableOperations.module.css";

function TableOperations({ children }) {
  return <div className={styles.tableOperations}>{children}</div>;
}

export default TableOperations;
