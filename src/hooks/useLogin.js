import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../apiFeatures/apiAuth";
import { useAuth } from "../context/AuthContext";

export function useLogin() {
  const { addUser } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user);
      addUser(user);
    },
  });

  return { login, isLoggingIn };
}
