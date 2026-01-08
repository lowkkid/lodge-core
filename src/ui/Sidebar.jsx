import styles from "./Sidebar.module.css";

function Sidebar({ children }) {
  return <aside className={styles["sidebar"]}>{children}</aside>;
}

export default Sidebar;
