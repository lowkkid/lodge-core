import { login as loginApi } from "../../services/apiAuth.js";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { parseJwt } from "../../utils/helpers.js";
import { useAuth } from "./AuthContext.jsx";

export default function useLogin() {
  const navigate = useNavigate();
  const { saveUser: saveUserToAuthContext } = useAuth();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      const jwtToken = data.jwtToken;
      const { role } = parseJwt(jwtToken);
      saveUserToAuthContext(jwtToken);

      if (role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
