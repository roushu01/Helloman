// api/reviewApi.js

import api from "./axios";

export const addReview = async (reviewData) => {
  const { data } = await api.post(
    "/api/reviews",
    reviewData,{
        headers:{
            Authorization:`Bearer${token}`
        }
    }
  );

  return data;
};