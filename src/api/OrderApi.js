import axios from "./axios";

export const createOrder = async (data) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(
    "/api/orders/",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const getOrders = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    "/api/orders/my-orders",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
  console.log(res.data)
};