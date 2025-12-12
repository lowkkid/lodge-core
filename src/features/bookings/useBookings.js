import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings.js";
import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = 8;

export default function useBookings() {
  const quieryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status") || "all";
  const filter = { field: "status", value: filterValue };

  const sortByValue = searchParams.get("sortBy") || "startDate-desc";
  const [sortByField, sortByDirection] = sortByValue.split("-");
  const sortBy = { field: sortByField, direction: sortByDirection };

  const pageNumber = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pageSize = PAGE_SIZE;

  const { isLoading, data, error } = useQuery({
    queryKey: ["bookings", filter, sortBy, pageNumber],
    queryFn: () => getBookings({ filter, sortBy, pageNumber, pageSize }),
  });

  const bookings = data?.data || [];
  const count = data?.count || 0;

  //pre-fetching
  if (pageNumber < Math.ceil(count / PAGE_SIZE)) {
    quieryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, pageNumber + 1],
      queryFn: () =>
        getBookings({ filter, sortBy, page: pageNumber + 1, pageSize }),
    });
  }

  if (pageNumber > 1) {
    quieryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, pageNumber - 1],
      queryFn: () =>
        getBookings({ filter, sortBy, page: pageNumber - 1, pageSize }),
    });
  }

  return { isLoading, bookings, count, pageSize, error };
}
