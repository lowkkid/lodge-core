import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getUsers } from "../../services/apiAdmin.js";

const PAGE_SIZE = 8;

export default function useUsers() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("role") || "all";
  const filter = { field: "role", value: filterValue };

  const sortByValue = searchParams.get("sortBy") || "createdAt-desc";
  const [sortByField, sortByDirection] = sortByValue.split("-");
  const sortBy = { field: sortByField, direction: sortByDirection };

  const pageNumber = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pageSize = PAGE_SIZE;

  const { isLoading, data, error } = useQuery({
    queryKey: ["users", filter, sortBy, pageNumber],
    queryFn: () => getUsers({ filter, sortBy, pageNumber, pageSize }),
  });

  const users = data?.data || [];
  const count = data?.count || 0;

  //pre-fetching
  if (pageNumber < Math.ceil(count / PAGE_SIZE)) {
    queryClient.prefetchQuery({
      queryKey: ["users", filter, sortBy, pageNumber + 1],
      queryFn: () =>
        getUsers({ filter, sortBy, page: pageNumber + 1, pageSize }),
    });
  }

  if (pageNumber > 1) {
    queryClient.prefetchQuery({
      queryKey: ["users", filter, sortBy, pageNumber - 1],
      queryFn: () =>
        getUsers({ filter, sortBy, page: pageNumber - 1, pageSize }),
    });
  }

  return { isLoading, users, count, pageSize, error };
}
