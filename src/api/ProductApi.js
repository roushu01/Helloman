import api from "./axios";
export const getProducts=async()=>{
    const response=await api.get("/api/products");
    return response.data;
}
export const createProduct = async (productData) => {
  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const response = await api.post(
      "/api/products",
      {
        ...productData,
        clerkUserId: user.clerkUserId
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
      params: {
        clerkUserId: user.clerkUserId,
      },
    });

    console.log("API Response:", response.data);

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