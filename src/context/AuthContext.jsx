import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { logoutUser } from "../apiFeatures/apiAuth";
import toast from "react-hot-toast";

import { useCurrentUser } from "../hooks/useCurrentUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const [user, setUser] = useState(null);

  const { isFetching, currUser } = useCurrentUser();

  useEffect(() => {
    if (currUser && !isFetching) {
      setUser(currUser);
    }
  }, [currUser, setUser, isFetching]);

  const { mutate: logout, isLoading: isLoggingout } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      setUser(null);
      toast.success("Logged out successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <AuthContext.Provider
      value={{ user, logout, setUser, isFetching, isLoggingout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === "undefined")
    throw new Error("Auth context is used outside its provider");

  return context;
};
