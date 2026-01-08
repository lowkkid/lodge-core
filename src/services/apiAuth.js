import api from "./api.js";

export async function login(loginData) {
  try {
    const res = await api.post("/auth/login", loginData);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function logout() {
  try {
    const res = await api.post("/auth/logout");
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function refresh() {
  try {
    const res = await api.post("/auth/refresh");
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}
