import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  let error = useRouteError();

  return <div>{error}</div>;
}

export default ErrorBoundary;
