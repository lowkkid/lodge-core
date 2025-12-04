import styles from "./Form.module.css";

function Form({ type = 'regular', className, ...props }) {
  return (
    <form
      className={`${styles["form"]} ${
        type === "modal" ? styles["form-modal"] : styles["form-regular"]
      } ${className || ""}`}
      {...props}
    />
  );
}

export default Form;
