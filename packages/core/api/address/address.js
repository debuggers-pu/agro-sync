import ApiClient from "../..";

export async function createAddress(data) {
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

export async function updateAddress(data) {
  try {
    const res = await ApiClient.put("/address", data);
    return res.data;
  } catch (error) {
    console.error("updateAddress - Error: ", error);
    throw error;
  }
}

export async function deleteAddress() {
  try {
    const res = await ApiClient.delete("/address");
    return res.data;
  } catch (error) {
    console.error("deleteAddress - Error: ", error);
    throw error;
  }
}
