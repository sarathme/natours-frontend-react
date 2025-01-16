import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Overview from "./components/Overview";

import TourDetails from "./components/TourDetails";
import AppLayout from "./components/AppLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import NotImplemented from "./components/NotImplemented";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      // staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="tours" replace />} />
              <Route path="tours" element={<Overview />} />
              <Route path="tours/:tourId" element={<TourDetails />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<NotImplemented />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#374151",
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
