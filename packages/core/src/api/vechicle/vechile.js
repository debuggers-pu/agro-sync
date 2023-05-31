import ApiClient from "../index";

export async function createVechicle(data) {
  try {
    const res = await ApiClient.post("/vehicles", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getVechicle() {
  try {
    const res = await ApiClient.get("/vehicles");
    return res.data;
  } catch (error) {
    console.error("getVechicle - Error: ", error);
    throw error;
  }
}

export async function updateVechicle(data) {
  try {
    const res = await ApiClient.put("/vehicles:id", data);
    return res.data;
  } catch (error) {
    console.error("updateVechicle - Error: ", error);
    throw error;
  }
}

export async function deleteVechicle() {
  try {
    const res = await ApiClient.delete("/vehicles:id");
    return res.data;
  } catch (error) {
    console.error("deleteVechicle - Error: ", error);
    throw error;
  }
}
