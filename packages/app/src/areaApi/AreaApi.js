import axios from "axios";

const baseURL = "https://www.nepallocation.com.np/api/v1";

const api = axios.create({
  baseURL: baseURL,
});

// users
export const signup = async (data) =>
  api.post("user/register", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
