import styles from "./ErrorFallback.module.css";
import Heading from "./Heading.jsx";
import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button.jsx";

function ErrorFallback({ children, ...props }) {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <main className={styles["errorFallback"]} {...props}>
      <div className={styles["box"]} {...props}>
        <Heading size="lg">Something went wrong</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={() => navigate("/")}>
          Try again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
