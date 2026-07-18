import api from "./axios";
export const getProducts=async()=>{
    const response=await api.get("/api/products");
    return response.data;
}
export const createProduct = async (productData) => {
    try{
       const token = localStorage.getItem("token");

  const response = await api.post(
    "/api/products",
    productData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
    }catch (err) {
  console.log("Full Error:", err);
  console.log("Response:", err.response);
  console.log("Data:", err.response?.data);
  console.log("Message:", err.message);
}
 
};
export const getSellerProducts = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/api/products/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};