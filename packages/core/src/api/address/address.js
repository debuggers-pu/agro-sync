import ApiClient from "../index";

export async function createAddress(data) {
  try {
    const res = await ApiClient.post("/addresses", data);
    return res.data;
  } catch (error) {
    console.error("createAddress - Error: ", error);
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
    const res = await ApiClient.put("/address:id", data);
    return res.data;
  } catch (error) {
    console.error("updateAddress - Error: ", error);
    throw error;
  }
}

export async function deleteAddress() {
  try {
    const res = await ApiClient.delete("/address:id");
    return res.data;
  } catch (error) {
    console.error("deleteAddress - Error: ", error);
    throw error;
  }
}
