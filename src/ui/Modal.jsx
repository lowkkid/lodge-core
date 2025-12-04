import styles from "./Modal.module.css";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import useOutsideClick from "../hooks/useOutsideClick.js";

const ModalContext = createContext({});

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef(null);

  useOutsideClick(ref, close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <div className={styles["modal"]} ref={ref}>
        <CloseButton onClick={close}>
          <HiXMark />
        </CloseButton>
        <div>{cloneElement(children, { onClose: close })}</div>
      </div>
    </Overlay>,
    document.body,
  );
}

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (openName) => setOpenName(openName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Overlay({ className, ...props }) {
  return (
    <div className={`${styles["overlay"]} ${className || ""}`} {...props} />
  );
}

function CloseButton({ children, className, ...props }) {
  return (
    <button className={`${styles["button"]} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}

Modal.Overlay = Overlay;
Modal.Button = CloseButton;
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
