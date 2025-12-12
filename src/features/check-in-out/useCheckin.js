import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { checkinBooking } from "../../services/apiBookings.js";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, checkinRequest }) =>
      checkinBooking(bookingId, checkinRequest),
    onSuccess: () => {
      toast.success("Booking checked in successfully");
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { checkin, isCheckingIn };
}
