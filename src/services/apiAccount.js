import api from "./api";

export async function updateAccount(accountData) {
  try {
    const res = await api.put(
      `/account`,
      { ...accountData },
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

export async function updatePassword(updatePasswordData) {
  try {
    const res = await api.patch(`/account/password`, {
      ...updatePasswordData,
    });
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}
