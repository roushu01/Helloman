import api from "./axios";

 // change to your endpoint

export const uploadProductsExcel = async (file) => {
  const token = localStorage.getItem("clerkId");

  const formData = new FormData();
  formData.append("file", file);

  const { data } = await api.post("/api/bulk-upload", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
export const getBulkUploadHistory = async () => {
  const token = localStorage.getItem("clerkId");
  console.log(token)

  const res = await api.get("/api/bulk-upload/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};