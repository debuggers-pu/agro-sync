import ApiClient from "../..";

export async function createReceiver(data) {
  try {
    const res = await ApiClient.post("/receivers", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getReceiver() {
  try {
    const res = await ApiClient.get("/receivers");
    return res.data;
  } catch (error) {
    console.error("getReceiver - Error: ", error);
    throw error;
  }
}

export async function updateReceiver(data) {
  try {
    const res = await ApiClient.put("/receivers:id", data);
    return res.data;
  } catch (error) {
    console.error("updateReceiver - Error: ", error);
    throw error;
  }
}

export async function deleteReceiver() {
  try {
    const res = await ApiClient.delete("/receivers:id");
    return res.data;
  } catch (error) {
    console.error("deleteReceiver - Error: ", error);
    throw error;
  }
}
