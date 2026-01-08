import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
import {
  HiOutlineCalendarDays,
  HiOutlineCog,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
function MainNav({ navItems, children, ...props }) {
  return (
    <nav>
      <ul className={styles["navList"]} {...props}>
        {children}
        {/*{navItems.map((item) => (*/}
        {/*  <li>*/}
        {/*    <Link to={item.to}>*/}
        {/*      {item.icon}*/}
        {/*      {item.label}*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*))}*/}
        {/*<li>*/}
        {/*  <Link to="/dashboard">*/}
        {/*    <HiOutlineHome />*/}
        {/*    <span>Home</span>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to="/bookings">*/}
        {/*    <HiOutlineCalendarDays />*/}
        {/*    <span>Bookings</span>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to="/cabins">*/}
        {/*    <HiOutlineHomeModern />*/}
        {/*    <span>Cabins</span>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to="/users">*/}
        {/*    <HiOutlineUsers />*/}
        {/*    <span>Users</span>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to="/settings">*/}
        {/*    <HiOutlineCog6Tooth />*/}
        {/*    <span>Settings</span>*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}

export default MainNav;
