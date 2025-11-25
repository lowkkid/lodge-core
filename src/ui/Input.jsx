import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(function ({ ...props }, ref) {
  return <input className={styles["input"]} {...props} ref={ref}></input>;
});

export default Input;
