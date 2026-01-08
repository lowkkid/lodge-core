import styles from "./UserAvatar.module.css";
import defaulAvatar from "../../assets/default-user.jpg";
// const StyledUserAvatar = styled.div`
//   display: flex;
//   gap: 1.2rem;
//   align-items: center;
//   font-weight: 500;
//   font-size: 1.4rem;
//   color: var(--color-grey-600);
// `;
//
// const Avatar = styled.img`
//   display: block;
//   width: 4rem;
//   width: 3.6rem;
//   aspect-ratio: 1;
//   object-fit: cover;
//   object-position: center;
//   border-radius: 50%;
//   outline: 2px solid var(--color-grey-100);
// `;

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
        src={avatar || defaulAvatar}
        alt={`Avatar of ${username}`}
      />
      <span>{username}</span>
    </div>
  );
}

export default UserAvatar;
