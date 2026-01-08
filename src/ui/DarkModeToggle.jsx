import ButtonIcon from "./ButtonIcon.jsx";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext.jsx";

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {darkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
