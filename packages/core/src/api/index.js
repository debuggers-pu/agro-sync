import axios from "axios";

const API_URL = "https://localhost:1337/api";

const ApiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default ApiClient;
