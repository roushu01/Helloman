import api from "./axios";
export const getProducts=async()=>{
    const response=await api.get("/api/products");
    return response.data;
}