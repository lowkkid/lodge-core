import styles from "./Form.module.css";

function Form({ type, className, ...props }) {
  return (
    <form
      className={`${styles["form"]} ${
        type === "modal" ? styles["formModal"] : styles["formRegular"]
      } ${className || ""}`}
      {...props}
    />
  );
}

export default Form;
