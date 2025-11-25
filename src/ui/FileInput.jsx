import styles from "./FileInput.module.css";
import { forwardRef } from "react";

const FileInput = forwardRef(function ({ className, ...props }, ref) {
  return (
    <input
      type="file"
      className={`${styles["fileInput"]} ${className || ""}`}
      {...props}
      ref={ref}
    />
  );
});
export default FileInput;
