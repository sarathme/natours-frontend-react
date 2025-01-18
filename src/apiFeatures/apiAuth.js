import axios from "axios";
const url = `${import.meta.env.VITE_API_URL}/api/v1/users`;

export async function loginUser(credentials) {
  try {
    const res = await axios.post(`${url}/login`, credentials, {
      withCredentials: true,
    });

    console.log(res.data.data.user);

    return res.data.data.user;
  } catch (error) {
    console.error(error);

    console.log(error.response);
    throw new Error(error.response.data.message);
  }
}

export async function logoutUser() {
  try {
    const res = await axios.get(`${url}/logout`, { withCredentials: true });
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);

    throw new Error("Can't logout. Please try again");
  }
}

export async function fetchCurrentUser() {
  try {
    const res = await axios.get(`${url}/me`, {
      withCredentials: true,
    });

    return res.data.data.data;
  } catch (err) {
    throw new Error("You are not logged in. Please login to book tours");
  }
}
