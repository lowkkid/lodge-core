import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployee as createEmployeeApi } from "../../services/apiAdmin.js";
import toast from "react-hot-toast";

export default function useCreateEmployee() {
  const queryClient = useQueryClient();

  const { mutate: createEmployee, isLoading: isCreating } = useMutation({
    mutationFn: createEmployeeApi,
    onSuccess: () => {
      toast.success("New employee created successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createEmployee };
}
