import styles from "./AppLayout.module.css";
import Header from "../ui/Header.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar.jsx";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import MainNav from "../ui/MainNav.jsx";
import Link from "../ui/Link.jsx";
import Logo from "../ui/Logo.jsx";

function AdminLayout() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Sidebar>
        <Logo />
        <MainNav>
          <li>
            <Link to="/admin/dashboard">
              <HiOutlineHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/bookings">
              <HiOutlineCalendarDays />
              <span>Bookings</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/cabins">
              <HiOutlineHomeModern />
              <span>Cabins</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <HiOutlineUsers />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/settings">
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

export default AdminLayout;
