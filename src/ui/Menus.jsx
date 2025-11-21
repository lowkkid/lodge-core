import styles from "./Menus.module.css";

function Menus({ children, ...props }) {
  return (
    <div className={styles["menu"]} {...props}>
      {children}
    </div>
  );
}

function Toggle({ children, className, ...props }) {
  return (
    <button className={`${styles["toggle"]} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}

function List({ position, children, className, ...props }) {
  return (
    <ul
      className={`${styles["list"]} ${className || ""}`}
      style={{
        right: position?.x ? `${position.x}px` : undefined,
        top: position?.y ? `${position.y}px` : undefined,
      }}
      {...props}
    >
      {children}
    </ul>
  );
}

function Button({ children, className, ...props }) {
  return (
    <button className={`${styles["button"]} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}

Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
