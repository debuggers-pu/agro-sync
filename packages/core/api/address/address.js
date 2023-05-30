import ApiClient from "../..";

export async function addAddress(data) {
  try {
    const res = await ApiClient.post("/address", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getAddress() {
  try {
    const res = await ApiClient.get("/address");
    return res.data;
  } catch (error) {
    console.error("getAddress - Error: ", error);
    throw error;
  }
}
