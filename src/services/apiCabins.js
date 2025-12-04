import api from "./api";

export async function getCabins() {
  try {
    const res = await api.get("/cabins");
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function deleteCabin(id) {
  try {
    const res = await api.delete(`/cabins/${id}`);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function createCabin(cabinFormData) {
  try {
    const res = await api.post(
      `/cabins`,
      { ...cabinFormData },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function editCabin(id, cabinFormData) {
  console.log(id);
  console.log(cabinFormData);
  try {
    const res = await api.put(
      `/cabins/${id}`,
      { ...cabinFormData },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}
