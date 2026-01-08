import styles from "./Header.module.css";
import UserAvatar from "../features/account/UserAvatar.jsx";
import Logout from "../features/authentication/Logout.jsx";

function Header() {
  return (
    <header className={styles["header"]}>
      <UserAvatar />
      <Logout />
    </header>
  );
}

export default Header;
