import ApiClient from "../..";

export async function createAnimal(data) {
  try {
    const res = await ApiClient.post("/animal", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getAnimal() {
  try {
    const res = await ApiClient.get("/animal");
    return res.data;
  } catch (error) {
    console.error("getAnimal - Error: ", error);
    throw error;
  }
}

export async function updateAnimal(data) {
  try {
    const res = await ApiClient.put("/animal", data);
    return res.data;
  } catch (error) {
    console.error("updateAnimal - Error: ", error);
    throw error;
  }
}

export async function deleteAnimal() {
  try {
    const res = await ApiClient.delete("/animal");
    return res.data;
  } catch (error) {
    console.error("deleteAnimal - Error: ", error);
    throw error;
  }
}