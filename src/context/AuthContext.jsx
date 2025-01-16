import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import {
  fetchCurrentUser,
  loginUser,
  logoutUser,
} from "../apiFeatures/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const [user, setUser] = useState(null);

  function addUser(user) {
    setUser(user);
  }

  const { mutate: logout, isLoading: isLoggingout } = useMutation({
    mutationFn: logoutUser,
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(["user"], null);
      setUser(null);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <AuthContext.Provider value={{ user, addUser, logout }}>
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
