import { useQuery } from "@tanstack/react-query";
import { getTodayActivity } from "../../services/apiBookings.js";

export default function useTodayActivity() {
  const { isLoading, data: todayActivity } = useQuery({
    queryFn: getTodayActivity,
    queryKey: ["today-activity"],
  });

  return { isLoading, todayActivity };
}
