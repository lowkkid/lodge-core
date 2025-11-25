import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Sidebar />
      <main className={styles["main"]}>
        <div className={styles["container"]}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
