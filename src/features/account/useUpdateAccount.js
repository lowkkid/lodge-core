import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateAccount as updateAccountApi } from "../../services/apiAccount.js";
import { useAuth } from "../authentication/AuthContext.jsx";

export default function useUpdateAccount() {
  const { saveUser: saveUserToAuthContext } = useAuth();

  const { mutate: updateAccount, isLoading: isUpdating } = useMutation({
    mutationFn: updateAccountApi,
    onSuccess: (data) => {
      toast.success("Account updated successfully");
      saveUserToAuthContext(data);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateAccount };
}
