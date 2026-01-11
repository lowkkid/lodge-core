import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getToday, subtractDaysFrom } from "../../utils/helpers.js";
import { getSalesBetweenDates } from "../../services/apiBookings.js";

export default function useRecentSales() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : parseInt(searchParams.get("last"));

  const endDate = getToday();
  const startDate = subtractDaysFrom(endDate, numDays);

  const { isLoading, data: sales } = useQuery({
    queryFn: () => getSalesBetweenDates(startDate, endDate),
    queryKey: ["sales", `last-${numDays}`],
  });

  return { isLoading, sales };
}
