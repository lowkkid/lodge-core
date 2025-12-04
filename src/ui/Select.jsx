import styles from "./Select.module.css";

function Select({ options, type, className, ...props }) {
  return (
    <select
      className={`${styles["select"]} ${
        type === "white" ? styles["selectWhite"] : ""
      } ${className || ""}`}
      {...props}
    >
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
