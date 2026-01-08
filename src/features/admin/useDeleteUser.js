import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteEmployee as deleteEmployeeApi } from "../../services/apiAdmin.js";

export default function useDeleteUser() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteEmployee } = useMutation({
    mutationFn: deleteEmployeeApi,
    onSuccess: () => {
      toast.success("Employee deleted successfully!");
      // without specifying additional keys, all cached state that included 'bookings' will be revalidated
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteEmployee };
}
