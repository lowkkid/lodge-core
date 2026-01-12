import styles from "./Logo.module.css";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import { Link } from "react-router-dom";

function Logo() {
  const { darkMode } = useDarkMode();

  const src = darkMode ? "/dark-mode-logo.png" : "/light-mode-logo.png";
  return (
    <Link className={styles["logo"]} to="/">
      <img className={styles["img"]} src={src} alt="Logo" />
    </Link>
  );
}

export default Logo;
