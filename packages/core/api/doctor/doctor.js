import ApiClient from "../..";

export async function createDoctor(data) {
  try {
    const res = await ApiClient.post("/doctor", data);
    return res.data;
  } catch (error) {
    console.error("postUser - Error: ", error);
    throw error;
  }
}

export async function getDoctor() {
  try {
    const res = await ApiClient.get("/doctor");
    return res.data;
  } catch (error) {
    console.error("getDoctor - Error: ", error);
    throw error;
  }
}

export async function updateDoctor(data) {
  try {
    const res = await ApiClient.put("/doctor", data);
    return res.data;
  } catch (error) {
    console.error("updateDoctor - Error: ", error);
    throw error;
  }
}

export async function deleteDoctor() {
  try {
    const res = await ApiClient.delete("/doctor");
    return res.data;
  } catch (error) {
    console.error("deleteDoctor - Error: ", error);
    throw error;
  }
}
