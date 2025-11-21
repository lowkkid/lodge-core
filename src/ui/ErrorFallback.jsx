import styles from "./ErrorFallback.module.css";

function ErrorFallback({ children, ...props }) {
  return (
    <main className={styles["errorFallback"]} {...props}>
      {children}
    </main>
  );
}

function Box({ children, ...props }) {
  return (
    <div className={styles["box"]} {...props}>
      {children}
    </div>
  );
}

ErrorFallback.Box = Box;

export default ErrorFallback;
