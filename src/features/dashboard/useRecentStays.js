import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getToday, subtractDaysFrom } from "../../utils/helpers.js";
import { getStaysBetweenDates } from "../../services/apiBookings.js";

export default function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : parseInt(searchParams.get("last"));

  const endDate = getToday();
  const startDate = subtractDaysFrom(endDate, numDays);

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysBetweenDates(startDate, endDate),
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out",
  );

  return { isLoading, stays, confirmedStays, numDays };
}
