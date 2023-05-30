import ApiClient from "../..";

export async function createPlantValue(data) {
  try {
    const res = await ApiClient.post("/plantValue", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getPlantValue() {
  try {
    const res = await ApiClient.get("/plantValue");
    return res.data;
  } catch (error) {
    console.error("getPlantValue - Error: ", error);
    throw error;
  }
}

export async function updatePlantValue(data) {
  try {
    const res = await ApiClient.put("/plantValue", data);
    return res.data;
  } catch (error) {
    console.error("updatePlantValue - Error: ", error);
    throw error;
  }
}

export async function deletePlantValue() {
  try {
    const res = await ApiClient.delete("/plantValue");
    return res.data;
  } catch (error) {
    console.error("deletePlantValue - Error: ", error);
    throw error;
  }
}
