import ApiClient from "../..";

export async function createVechicle(data) {
  try {
    const res = await ApiClient.post("/vechicle", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getVechicle() {
  try {
    const res = await ApiClient.get("/vechicle");
    return res.data;
  } catch (error) {
    console.error("getVechicle - Error: ", error);
    throw error;
  }
}

export async function updateVechicle(data) {
  try {
    const res = await ApiClient.put("/vechicle:id", data);
    return res.data;
  } catch (error) {
    console.error("updateVechicle - Error: ", error);
    throw error;
  }
}

export async function deleteVechicle() {
  try {
    const res = await ApiClient.delete("/vechicle:id");
    return res.data;
  } catch (error) {
    console.error("deleteVechicle - Error: ", error);
    throw error;
  }
}
