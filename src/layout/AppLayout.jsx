import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";
import Logo from "../ui/Logo.jsx";
import MainNav from "../ui/MainNav.jsx";
import Link from "../ui/Link.jsx";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

function AppLayout() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Sidebar>
        <Logo />
        <MainNav>
          <li>
            <Link to="/dashboard">
              <HiOutlineHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/bookings">
              <HiOutlineCalendarDays />
              <span>Bookings</span>
            </Link>
          </li>
          <li>
            <Link to="/cabins">
              <HiOutlineHomeModern />
              <span>Cabins</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <HiOutlineCog6Tooth />
              <span>Settings</span>
            </Link>
          </li>
        </MainNav>
      </Sidebar>
      <main className={styles["main"]}>
        <div className={styles["container"]}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
