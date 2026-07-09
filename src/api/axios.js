import axios from "axios";

const api = axios.create({
  baseURL: "https://hellomaam.onrender.com",

  headers: {
    "Content-Type": "application/json",
  },

});

export default api;