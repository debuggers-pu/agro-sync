import ApiClient from "../index";

export async function createPlantValue(data) {
  try {
    const res = await ApiClient.post("/plantvalues", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getPlantValue() {
  try {
    const res = await ApiClient.get("/plantvalues");
    return res.data;
  } catch (error) {
    console.error("getPlantValue - Error: ", error);
    throw error;
  }
}

export async function updatePlantValue(data) {
  try {
    const res = await ApiClient.put("/plantvalues:id", data);
    return res.data;
  } catch (error) {
    console.error("updatePlantValue - Error: ", error);
    throw error;
  }
}

export async function deletePlantValue() {
  try {
    const res = await ApiClient.delete("/plantvalues:id");
    return res.data;
  } catch (error) {
    console.error("deletePlantValue - Error: ", error);
    throw error;
  }
}
