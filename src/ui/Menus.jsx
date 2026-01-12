import styles from "./Menus.module.css";
import { createContext, useContext, useRef, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick.js";

const MenusContext = createContext({});

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = (id) => setOpenId(id);

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className={styles["menu"]}>{children}</div>;
}

function Toggle({ opens }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  const handleClick = (e) => {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === opens ? close() : open(opens);
  };

  return (
    <button onClick={handleClick} className={styles["toggle"]}>
      <HiEllipsisVertical />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useRef(null);
  useOutsideClick(ref, close, false);
  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      className={styles["list"]}
      style={{
        right: position?.x ? `${position.x}px` : undefined,
        top: position?.y ? `${position.y}px` : undefined,
      }}
    >
      {children}
    </ul>,
    document.body,
  );
}

function MenuButton({ icon, children, onClick, ...props }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li className={styles["button"]} onClick={handleClick} {...props}>
      {icon}
      <span>{children}</span>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.MenuButton = MenuButton;

export default Menus;
