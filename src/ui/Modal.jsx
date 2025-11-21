import styles from "./Modal.module.css";

function Modal({ children, className, ...props }) {
  return (
    <div className={`${styles["modal"]} ${className || ""}`} {...props}>
      {children}
    </div>
  );
}

function Overlay({ className, ...props }) {
  return (
    <div className={`${styles["overlay"]} ${className || ""}`} {...props} />
  );
}

function Button({ children, className, ...props }) {
  return (
    <button className={`${styles["button"]} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}

Modal.Overlay = Overlay;
Modal.Button = Button;

export default Modal;
