import ApiClient from "../..";

export async function createInspector(data) {
  try {
    const res = await ApiClient.post("/inspector", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getInspector() {
  try {
    const res = await ApiClient.get("/inspector");
    return res.data;
  } catch (error) {
    console.error("getInspector - Error: ", error);
    throw error;
  }
}

export async function updateInspector(data) {
  try {
    const res = await ApiClient.put("/inspector:id", data);
    return res.data;
  } catch (error) {
    console.error("updateInspector - Error: ", error);
    throw error;
  }
}

export async function deleteInspector() {
  try {
    const res = await ApiClient.delete("/inspector:id");
    return res.data;
  } catch (error) {
    console.error("deleteInspector - Error: ", error);
    throw error;
  }
}
