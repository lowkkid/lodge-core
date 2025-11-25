import api from "./api";

export async function getSettings() {
  try {
    const res = await api.get("/settings");
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function updateSetting(newSetting) {
  try {
    const res = await api.put("/settings", { ...newSetting });
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}
