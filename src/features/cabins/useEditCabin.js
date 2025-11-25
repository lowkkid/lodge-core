import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { editCabin as editCabinApi } from "../../services/apiCabins";

export default function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ id, cabinFormData }) => editCabinApi(id, cabinFormData),
    onSuccess: () => {
      toast.success("Cabin edited successfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
