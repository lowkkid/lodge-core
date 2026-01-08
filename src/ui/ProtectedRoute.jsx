import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../features/authentication/AuthContext.jsx";
import Spinner from "./Spinner.jsx";

import styles from "./ProtectedRoute.module.css";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className={styles["full"]}>
        <Spinner />
      </div>
    );
  }

  if (!user) {
    // save current path, so when user login he back to exactly that path
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    if (user.role === "ADMIN") {
      return <Navigate to="/admin" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  }
  return children;
}
