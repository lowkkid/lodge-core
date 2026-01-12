import { useEffect } from "react";

function useOutsideClick(ref, action, listenCapturing = true) {
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        action();
      }
    };
    document.addEventListener("click", handleClick, listenCapturing);

    return () => document.removeEventListener("click", handleClick);
  }, [ref, action, listenCapturing]);
}

export default useOutsideClick;
