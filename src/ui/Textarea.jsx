import { forwardRef } from "react";
import styles from "./Textarea.module.css";

const Textarea = forwardRef(function ({ ...props }, ref) {
  return <textarea className={styles.textarea} {...props} ref={ref} />;
});

export default Textarea;
