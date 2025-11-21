import styles from "./Pagination.module.css";

function Pagination({ children }) {
  return <div className={styles["pagination"]}>{children}</div>;
}

function P({ children, ...props }) {
  return (
    <p className={styles["p"]} {...props}>
      {children}
    </p>
  );
}

function Buttons({ children, ...props }) {
  return (
    <div className={styles["buttons"]} {...props}>
      {children}
    </div>
  );
}

function PaginationButton({ active, children, className, ...props }) {
  return (
    <button
      className={`${styles["paginationButton"]} ${
        active ? styles["paginationButtonActive"] : ""
      } ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

Pagination.P = P;
Pagination.Buttons = Buttons;
Pagination.Button = PaginationButton;

export default Pagination;
