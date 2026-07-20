import api from "./axios";

export const addReview = async (reviewData) => {
  const token = localStorage.getItem("token");

  const res = await api.post(
    "/api/reviews",
    reviewData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
  console.log("product review:",res.data)
};

export const getSellerReviews = async (filters = {}) => {
  const token = localStorage.getItem("token");

  const res = await api.get("/api/reviews/seller", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: filters,
  });

  return res.data;
};