import ApiClient from "../index";

export async function createDoctor(data) {
  try {
    const res = await ApiClient.post("/doctors", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getDoctor() {
  try {
    const res = await ApiClient.get("/doctors");
    return res.data;
  } catch (error) {
    console.error("getDoctor - Error: ", error);
    throw error;
  }
}

export async function updateDoctor(data) {
  try {
    const res = await ApiClient.put("/doctors:id", data);
    return res.data;
  } catch (error) {
    console.error("updateDoctor - Error: ", error);
    throw error;
  }
}

export async function deleteDoctor() {
  try {
    const res = await ApiClient.delete("/doctors:id");
    return res.data;
  } catch (error) {
    console.error("deleteDoctor - Error: ", error);
    throw error;
  }
}
