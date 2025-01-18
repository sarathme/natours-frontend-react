import axios from "axios";
const url = `${import.meta.env.VITE_API_URL}/api/v1/bookings`;

export async function getCheckout(orderData) {
  console.log(orderData);
  try {
    const res = await axios.post(`${url}/checkout-session`, orderData, {
      withCredentials: true,
    });

    console.log(res.data.order);

    return res.data.order;
  } catch (err) {
    console.log(err);
  }
}
