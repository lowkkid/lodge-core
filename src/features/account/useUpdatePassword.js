import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updatePassword as updatePasswordApi } from "../../services/apiAccount.js";

export default function useUpdatePassword() {
  const { mutate: updatePassword, isLoading: isUpdating } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      toast.success("Password updated successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updatePassword };
}
