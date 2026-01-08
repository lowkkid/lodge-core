import { logout as logoutApi } from "../../services/apiAuth.js";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

export default function useLogout() {
  const navigate = useNavigate();
  const { logout: clearAuthContext } = useAuth();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSettled: () => {
      clearAuthContext();
      navigate("/login");
    },
  });

  return { logout, isLoading };
}
