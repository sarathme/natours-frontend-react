import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { logoutUser } from "../apiFeatures/apiAuth";
import toast from "react-hot-toast";

import { useCurrentUser } from "../hooks/useCurrentUser";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const [user, setUser] = useState(null);

  const { isFetching, currUser } = useCurrentUser();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (currUser && !isFetching) {
      setUser(currUser);
    }
  }, [currUser, setUser, isFetching]);

  // const { mutate: logout, isLoading: isLoggingout } = useMutation({
  //   mutationFn: logoutUser,
  //   onSuccess: () => {
  //     queryClient.setQueryData(["user"], null);
  //     setUser(null);
  //     localStorage.removeItem("jwt");
  //     toast.success("Logged out successfully");
  //   },
  //   onError: (err) => {
  //     console.error(err);
  //     toast.error(err.message);
  //   },
  //   retry: false,
  // });

  // useQuery({
  //   queryKey: ["user"],
  //   queryFn: logoutUser,
  //   retry: false,
  // });

  async function logout() {
    try {
      setIsLoggingOut(true);
      const res = await logoutUser();
      queryClient.setQueryData(["user"], null);
      setUser(null);
      localStorage.removeItem("jwt");
      console.log(res);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoggingOut(false);
    }
    await logoutUser();
  }

  return (
    <AuthContext.Provider
      value={{ user, logout, setUser, isFetching, isLoggingOut }}>
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
