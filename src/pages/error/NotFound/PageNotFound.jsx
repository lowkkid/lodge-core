import styles from "./PageNotFound.module.css";

import { useMoveBack } from "../../../hooks/useMoveBack";
import Heading from "../../../ui/Heading";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className={styles["pageNotFound"]}>
      <div className={styles["box"]}>
        <Heading size="lg">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
