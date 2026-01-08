import api from "./api.js";

export async function getUsers({ filter, sortBy, pageNumber, pageSize }) {
  try {
    const params = [];

    if (filter && filter.value !== "all") {
      params.push(`${filter.field}=${filter.value}`);
    }

    if (sortBy) {
      params.push(`sortField=${sortBy.field}`);
      params.push(`sortDirection=${sortBy.direction.toUpperCase()}`);
    }

    if (pageNumber != null) {
      params.push(`pageNumber=${pageNumber}`);
    }

    if (pageSize) {
      params.push(`pageSize=${pageSize}`);
    }

    const url = `/users${params.length > 0 ? "?" + params.join("&") : ""}`;

    const res = await api.get(url);

    return {
      data: res.data.content,
      count: res.data.totalElements,
    };
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function createEmployee(userData) {
  try {
    const res = await api.post(`/users/employee`, { ...userData });
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function deleteEmployee(id) {
  try {
    const res = await api.delete(`/users/employee/${id}`);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}
