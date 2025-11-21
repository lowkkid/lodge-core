import styles from "./Filter.module.css";

function Filter({ children, ...props }) {
  return (
    <div className={styles["filter"]} {...props}>
      {children}
    </div>
  );
}

function FilterButton({ active, children, ...props }) {
  return (
    <button
      className={`${styles["filterButton"]} ${
        active ? styles["filterButtonActive"] : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

Filter.Button = FilterButton;

export default Filter;
