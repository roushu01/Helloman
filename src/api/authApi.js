import api from "./axios";

export const login = async (data) => {
  try {
    const res = await api.post("/api/login", data);

    return res.data;

  } catch (error) {
    throw error;
  }
};

export const signup = async (data) => {
  try {
    const res = await api.post(
      "/api/customer/register",
      data
    );

    return res.data.customer;

  } catch (error) {
    console.log(
      error.response?.data ||
      error.message
    );

    throw error; // IMPORTANT
  }
};