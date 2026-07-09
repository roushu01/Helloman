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
  const { data } = await api.post("/api/auth/forgot-password", {
    email,
  });

  return data;
  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("Data:", error.response?.data);
    console.log("URL:", error.config?.url);
    console.log(error);
    throw error;
  }
}
};
export const resetPassword = async (token, password) => {
  const res = await api.patch(
    `/api/auth/reset-password/${token}`,
    {
      password,
    }
  );

  return res.data;
<<<<<<< HEAD
};
=======
};
>>>>>>> a23d907823030961ce9f1239095efc4d44219357
