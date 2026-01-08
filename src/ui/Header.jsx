import styles from "./Header.module.css";
import UserAvatar from "../features/account/UserAvatar.jsx";
import Logout from "../features/authentication/Logout.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

function Header() {
  return (
    <header className={styles["header"]}>
      <UserAvatar />
      <DarkModeToggle />
      <Logout />
    </header>
  );
}

export default Header;
