import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "jwt"
)}`;
const url = `${import.meta.env.VITE_API_URL}/api/v1/bookings`;

export async function getCheckout(orderData) {
  try {
    const res = await axios.post(`${url}/checkout-session`, orderData);

    return res.data.order;
  } catch (err) {
    console.error(err);
  }
}
