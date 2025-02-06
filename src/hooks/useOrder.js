import { useMutation } from "@tanstack/react-query";
import { getCheckout } from "../apiFeatures/apiBookings";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export function useOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isPending: isCreatingOrder, mutate: createOrder } = useMutation({
    mutationFn: (orderData) => getCheckout(orderData),
    onSuccess: (order) => {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "Natours",
        description: "Test Transaction",
        order_id: order.id,
        handler: (response) => {
          toast.success("Payment successful");
          navigate(-1, { replace: true });
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9876543210",
        },

        theme: {
          color: "#7dd56f",
        },
        modal: {
          ondismiss: () => {
            toast.error("Payment cancelled");
          },
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    },
    onError: (err) => {
      toast.error("Payment unsuccessful. Please try again");
    },
  });

  return { isCreatingOrder, createOrder };
}
