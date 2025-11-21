import styles from "./FileInput.module.css";

function FileInput({ className, ...props }) {
  return (
    <input
      type="file"
      className={`${styles["fileInput"]} ${className || ""}`}
      {...props}
    />
  );
}

export default FileInput;
