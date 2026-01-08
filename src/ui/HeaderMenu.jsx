import styles from "./HeaderMenu.module.css";
import Logout from "../features/authentication/Logout.jsx";
import ButtonIcon from "./ButtonIcon.jsx";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle.jsx";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className={styles.menu}>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
