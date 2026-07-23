import api from "./axios";

export const getProducts = async () => {
  const response = await api.get("/api/products");
  return response.data;
};

export const createProduct = async (productData) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await api.post(
      "/api/products",
      productData,
      {
        headers: {
          Authorization: `Bearer ${user.clerkId}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log("Full Error:", err);
    console.log("Response:", err.response);
    console.log("Data:", err.response?.data);
    console.log("Message:", err.message);
  }
};

export const getSellerProducts = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const response = await api.get("/api/products", {
      headers: {
        Authorization: `Bearer ${user.clerkId}`,
      },
    });

    return response.data;
  } catch (err) {
    console.log("Error:", err.response?.data);

    return {
      success: false,
      message: err.response?.data?.message,
      products: [],
    };
  }
};
export const updateProduct = async (id, productData) => {
  try {
    const clerkId = localStorage.getItem("clerkId");

    const response = await api.put(
      `/api/products/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${clerkId}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log(err.response?.data);
    throw err;
  }
};