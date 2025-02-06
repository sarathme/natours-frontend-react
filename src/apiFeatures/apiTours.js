import axios from "axios";

axios.defaults.withCredentials = true;

const url = `${import.meta.env.VITE_API_URL}/api/v1/tours`;
export async function getAllTours() {
  try {
    const res = await axios.get(url);

    return res.data.data.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.response.data);
  }
}

export async function getTour(tourId) {
  try {
    const res = await axios.get(`${url}/${tourId}`);

    return res.data.data.data;
  } catch (err) {
    console.error(err.response.data);
    throw new Error(err.response.data.message);
  }
}
