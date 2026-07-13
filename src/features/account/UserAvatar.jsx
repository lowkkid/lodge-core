import styles from "./UserAvatar.module.css";
import defaultAvatar from "../../assets/default-user.jpg";

import { useAuth } from "../authentication/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function UserAvatar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { username, avatar, role } = user;

  const navigateTo = role === "ADMIN" ? "/admin/me" : "/me";
  return (
    <div className={styles["user-avatar"]} onClick={() => navigate(navigateTo)}>
      <img
        className={styles["avatar"]}
        src={avatar || defaultAvatar}
        alt={`Avatar of ${username}`}
      />
      <span>{username}</span>
    </div>
  );
}

export default UserAvatar;
