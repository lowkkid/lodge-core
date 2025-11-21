import styles from "./Table.module.css";

function Table({ columns, children }) {
  return (
    <div className={styles.table} style={{ "--columns": columns }}>
      {children}
    </div>
  );
}

function Header({ children, columns }) {
  return (
    <div
      className={`${styles.commonRow} ${styles.header}`}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Row({ children, columns }) {
  return (
    <div
      className={`${styles.commonRow} ${styles.row}`}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render, columns }) {
  if (!data || data.length === 0) {
    return (
      <section className={styles.body}>
        <p className={styles.empty}>No data to show at the moment</p>
      </section>
    );
  }

  return <section className={styles.body}>{data.map(render)}</section>;
}

function Footer({ children }) {
  return <footer className={styles.footer}>{children}</footer>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
