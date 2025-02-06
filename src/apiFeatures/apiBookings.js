import axios from "axios";

axios.defaults.withCredentials = true;

const url = `${import.meta.env.VITE_API_URL}/api/v1/bookings`;

export async function getCheckout(orderData) {
  try {
    const res = await axios.post(`${url}/checkout-session`, orderData, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });

    return res.data.order;
  } catch (err) {
    console.error(err);
  }
}
