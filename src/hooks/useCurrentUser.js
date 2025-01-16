import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "../apiFeatures/apiAuth";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export function useCurrentUser() {
  const { setUser } = useAuth();
  const {
    data: user,
    isLoading: isFetching,
    isError: errorFetchingUser,
    error: userError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchCurrentUser,
    onSuccess: (user) => {
      setUser(user);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
    retry: false,
  });

  return { user, isFetching, userError, errorFetchingUser };
}
