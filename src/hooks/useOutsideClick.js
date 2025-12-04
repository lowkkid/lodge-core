import { useEffect } from "react";

function useOutsideClick(ref, action) {
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        action();
      }
    };
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick);
  }, [ref, action]);
}

export default useOutsideClick;
