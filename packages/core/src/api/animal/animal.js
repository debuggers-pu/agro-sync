import ApiClient from "../index";

export async function createAnimal(data) {
  try {
    const res = await ApiClient.post("/animals", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getAnimal() {
  try {
    const res = await ApiClient.get("/animals");
    return res.data;
  } catch (error) {
    console.error("getAnimal - Error: ", error);
    throw error;
  }
}

export async function updateAnimal(data) {
  try {
    const res = await ApiClient.put("/animals", data);
    return res.data;
  } catch (error) {
    console.error("updateAnimal - Error: ", error);
    throw error;
  }
}

export async function deleteAnimal() {
  try {
    const res = await ApiClient.delete("/animals:id");
    return res.data;
  } catch (error) {
    console.error("deleteAnimal - Error: ", error);
    throw error;
  }
}
