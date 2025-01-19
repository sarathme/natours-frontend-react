import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "jwt"
)}`;
const url = `${import.meta.env.VITE_API_URL}/api/v1/users`;

export async function loginUser(credentials) {
  try {
    const res = await axios.post(`${url}/login`, credentials);

    console.log(res.data.data.user);

    return res.data;
  } catch (error) {
    console.error(error);

    console.log(error.response);
    throw new Error(error.response.data.message);
  }
}

export async function logoutUser() {
  try {
    const res = await axios.get(`${url}/logout`);
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);

    throw new Error("Can't logout. Please try again");
  }
}

export async function fetchCurrentUser() {
  try {
    const res = await axios.get(`${url}/me`);
    console.log(res);
    return res.data.data.data;
  } catch (err) {
    console.log(err);
    throw new Error("You are not logged in. Please login to book tours");
  }
}
