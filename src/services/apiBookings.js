import api from "./api.js";

export async function getBookings({ filter, sortBy, pageNumber, pageSize }) {
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

    const url = `/bookings${params.length > 0 ? "?" + params.join("&") : ""}`;

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

export async function getSalesBetweenDates(start, end) {
  try {
    const res = await api.get(`/bookings/sales?start=${start}&end=${end}`);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function getBookingsCountBetweenDates(start, end) {
  try {
    const res = await api.get(`/bookings/count?start=${start}&end=${end}`);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function getStaysBetweenDates(start, end) {
  try {
    const res = await api.get(`/bookings/stays?start=${start}&end=${end}`);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function getTodayActivity() {
  try {
    const res = await api.get(`/bookings/today`);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function getBooking(id) {
  try {
    const res = await api.get(`/bookings/${id}`);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function checkinBooking(id, checkinRequest) {
  try {
    await api.patch(`/bookings/${id}/checkin`, {
      ...checkinRequest,
    });
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function checkoutBooking(id) {
  try {
    await api.patch(`/bookings/${id}/checkout`);
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}

export async function deleteBooking(id) {
  try {
    const res = await api.delete(`/bookings/${id}`);
    return res.data;
  } catch (err) {
    if (typeof err.response?.data === "string") {
      throw new Error(err.response?.data);
    } else {
      throw new Error(err.message);
    }
  }
}
