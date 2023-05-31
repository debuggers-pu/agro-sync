import ApiClient from "../..";

export async function createPlant(data) {
  try {
    const res = await ApiClient.post("/plant", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getPlant() {
  try {
    const res = await ApiClient.get("/plant");
    return res.data;
  } catch (error) {
    console.error("getPlant - Error: ", error);
    throw error;
  }
}

export async function updatePlant(data) {
  try {
    const res = await ApiClient.put("/plant:id", data);
    return res.data;
  } catch (error) {
    console.error("updatePlant - Error: ", error);
    throw error;
  }
}

export async function deletePlant() {
  try {
    const res = await ApiClient.delete("/plant:id");
    return res.data;
  } catch (error) {
    console.error("deletePlant - Error: ", error);
    throw error;
  }
}
