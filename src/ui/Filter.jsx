import styles from "./Filter.module.css";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className={styles["filter"]}>
      {options.map((option, index) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={index}
          active={currentFilter === option.value}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
}

function FilterButton({ active, children, ...props }) {
  return (
    <button
      className={`${styles["filterButton"]} ${
        active ? styles["filterButtonActive"] : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Filter;
