import api from "./axios";

export const getSellerDashboard = async () => {
  const clerkId = localStorage.getItem("sellerClerkId");

  const response = await api.get("/api/sellers/dashboard", {
    headers: {
      "x-clerk-id": clerkId,
    },
  });

  return response.data;
};