import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../apiFeatures/apiAuth";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export function useLogin() {
  const { setUser } = useAuth();
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.data.user);
      setUser(data.data.user);

      localStorage.setItem("jwt", data.data.token);
      toast.success("Logged in successfully");
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message);
    },
  });

  return { login, isLoggingIn };
}
