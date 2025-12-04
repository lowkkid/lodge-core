import styles from "./Table.module.css";
import { createContext, useContext } from "react";

const TableContext = createContext({});
function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className={styles["table"]} role="table">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const context = useContext(TableContext);
  return (
    <header
      role="row"
      className={`${styles.commonRow} ${styles.header}`}
      style={{ gridTemplateColumns: context.columns }}
    >
      {children}
    </header>
  );
}

function Row({ children }) {
  const context = useContext(TableContext);

  return (
    <div
      className={`${styles["commonRow"]} ${styles["row"]}`}
      style={{ gridTemplateColumns: context.columns }}
      role="row"
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
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
