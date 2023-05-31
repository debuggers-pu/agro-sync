import ApiClient from "../..";

export async function createSender(data) {
  try {
    const res = await ApiClient.post("/sender", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getSender() {
  try {
    const res = await ApiClient.get("/sender");
    return res.data;
  } catch (error) {
    console.error("getSender - Error: ", error);
    throw error;
  }
}

export async function updateSender(data) {
  try {
    const res = await ApiClient.put("/sender:id", data);
    return res.data;
  } catch (error) {
    console.error("updateSender - Error: ", error);
    throw error;
  }
}

export async function deleteSender() {
  try {
    const res = await ApiClient.delete("/sender:id");
    return res.data;
  } catch (error) {
    console.error("deleteSender - Error: ", error);
    throw error;
  }
}
