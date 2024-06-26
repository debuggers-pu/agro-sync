import ApiClient from "../index";

export async function createAnimalValue(data) {
  try {
    const res = await ApiClient.post("/animalvalues", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getAnimalValue() {
  try {
    const res = await ApiClient.get("/animalvalues");
    return res.data;
  } catch (error) {
    console.error("getAnimalValue - Error: ", error);
    throw error;
  }
}

export async function updateAnimalValue(data) {
  try {
    const res = await ApiClient.put("/animalvalues:id", data);
    return res.data;
  } catch (error) {
    console.error("updateAnimalValue - Error: ", error);
    throw error;
  }
}

export async function deleteAnimalValue() {
  try {
    const res = await ApiClient.delete("/animalvalues:id");
    return res.data;
  } catch (error) {
    console.error("deleteAnimalValue - Error: ", error);
    throw error;
  }
}
