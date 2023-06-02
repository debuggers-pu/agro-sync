import ApiClient from "../index";

export async function createSender(data) {
  try {
    const res = await ApiClient.post("/senders", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getSender() {
  try {
    const res = await ApiClient.get("/senders");
    return res.data;
  } catch (error) {
    console.error("getSender - Error: ", error);
    throw error;
  }
}

export async function updateSender(data) {
  try {
    const res = await ApiClient.put("/senders:id", data);
    return res.data;
  } catch (error) {
    console.error("updateSender - Error: ", error);
    throw error;
  }
}

export async function deleteSender() {
  try {
    const res = await ApiClient.delete("/senders:id");
    return res.data;
  } catch (error) {
    console.error("deleteSender - Error: ", error);
    throw error;
  }
}
