import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "../apiFeatures/apiAuth";

export function useCurrentUser() {
  const {
    data: currUser,
    isLoading: isFetching,
    isError: errorFetchingUser,
    error: userError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchCurrentUser,
    retry: false,
  });

  return { currUser, isFetching, userError, errorFetchingUser };
}
