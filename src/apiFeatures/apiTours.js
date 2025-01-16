import axios from "axios";
const url = `${import.meta.env.VITE_API_URL}/api/v1/tours`;
export async function getAllTours() {
  try {
    const res = await axios.get(url, { withCredentials: true });

    return res.data.data.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.response.data);
  }
}

export async function getTour(tourId) {
  try {
    const res = await axios.get(`${url}/${tourId}`, { withCredentials: true });

    return res.data.data.data;
  } catch (err) {
    console.log(err.response.data);
    throw new Error(err.response.data.message);
  }
}
