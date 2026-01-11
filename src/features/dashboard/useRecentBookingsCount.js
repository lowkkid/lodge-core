import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getToday, subtractDaysFrom } from "../../utils/helpers.js";
import { getBookingsCountBetweenDates } from "../../services/apiBookings.js";

export default function useRecentBookingsCount() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : parseInt(searchParams.get("last"));

  const endDate = getToday();
  const startDate = subtractDaysFrom(endDate, numDays);

  const { isLoading, data: bookingsCount } = useQuery({
    queryFn: () => getBookingsCountBetweenDates(startDate, endDate),
    queryKey: ["count", `last-${numDays}`],
  });

  return { isLoading, bookingsCount };
}
