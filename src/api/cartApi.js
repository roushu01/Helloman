import api from "./axios";

export const addToCart = async (productId, quantity = 1) => {
  try {
    const token = localStorage.getItem("token");
    if (!token){
        alert("Please login first")
    }
   
    const res = await api.post(
      "/api/cart/add",
      {
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    throw error;
  }
};


export const getCart = async () => {
    const token = localStorage.getItem("token");

    const res = await api.get("/api/cart/", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
};

export const updateCart = async (productId, quantity) => {
  const token = localStorage.getItem("token");

  const res = await api.patch(
    `/api/cart/update/${productId}`,
    { quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const deleteCartItem = async (productId) => {
  const token = localStorage.getItem("token");

  console.log("Deleting Product:", productId);

  const res = await api.delete(`/api/cart/remove/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};