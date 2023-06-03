import axios from "axios";

const API_URL = "https://www.nepallocation.com.np/api/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer HQA1Nkx-yfKXp-fDVroKvnU5",
  },
});

//Provinces
export const getProvinces = async () => {
  const res = await api.get("/province/list");
  return res.data.data.data;
};
export const getDistrict = async (id) => {
  const res = await api.get(`province/${id}/district`);
  return res.data.data;
};
export const getMunicipality = async (id) => {
  const res = await api.get(`district/${id}/municipalities`);
  return res.data.data;
};

export default api;
