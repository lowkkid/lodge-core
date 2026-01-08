import { NavLink } from "react-router-dom";
import styles from "./Link.module.css";

function Link({ children, className, ...props }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles["link"]} ${isActive ? styles["active"] : ""} ${
          className || ""
        }`
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}

export default Link;
