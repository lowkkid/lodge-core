import styles from "./Logo.module.css";
import { useDarkMode } from "../context/DarkModeContext.jsx";

function Logo() {
  const { darkMode } = useDarkMode();

  const src = darkMode ? "/logo-dark.png" : "/logo-light.png";
  return (
    <div className={styles["logo"]}>
      <img className={styles["img"]} src={src} alt="Logo" />
    </div>
  );
}

export default Logo;
