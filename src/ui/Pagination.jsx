import styles from "./Pagination.module.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function Pagination({ pageSize, count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pageCount = Math.ceil(count / pageSize);

  if (pageCount <= 1) return null;

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  return (
    <div className={styles["pagination"]}>
      <p className={styles["paragraph"]}>
        Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * pageSize}
        </span>{" "}
        of {count} results
      </p>

      <div className={styles["buttons"]}>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </div>
    </div>
  );
}

function PaginationButton({ active, children, className, ...props }) {
  return (
    <button
      className={`${styles["paginationButton"]} ${
        active ? styles["paginationButtonActive"] : ""
      } ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Pagination;
