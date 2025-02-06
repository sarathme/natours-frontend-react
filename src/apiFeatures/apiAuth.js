import axios from "axios";

axios.defaults.withCredentials = true
const url = `${import.meta.env.VITE_API_URL}/api/v1/users`;

export async function loginUser(credentials) {
  try {
    const res = await axios.post(`${url}/login`, credentials);

    return res.data;
  } catch (error) {
    console.error(error);

    throw new Error(error.response.data.message);
  }
}

export async function logoutUser() {
  try {
    const res = await axios.get(`${url}/logout`);

    return res;
  } catch (err) {
    console.error(err);
    throw new Error("Can't logout. Please try again");
  }
}

export async function fetchCurrentUser() {
  try {
    const res = await axios.get(`${url}/me`,{headers: {"Authorization": `Bearer ${localStorage.getItem("jwt")}`}});

    return res.data.data.data;
  } catch (err) {
    console.error(err);
    throw new Error("You are not logged in. Please login to book tours");
  }
}
