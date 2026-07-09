import api from "./axios";

export const login = async (data) => {
  try {
    const res = await api.post("/api/auth/login", data);

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
export const forgotPassword = async (email) => {
  try{  
  const { data } = await API.post("/api/auth/forget-password", {
    email,
  });

  return data;
}catch (error) {  
  console.log(
    error.response?.data ||
    error.message
  );

}
};
export const resetPassword = async (token, password) => {
  const res = await api.put(
    `/api/customer/reset-password/${token}`,
    {
      password,
    }
  );

  return res.data;
};
