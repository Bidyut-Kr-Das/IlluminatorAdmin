import axios from "axios";
axios.defaults.withCredentials = true;

// https://illuminatorbackend.up.railway.app/api/v1/admin

const productApi = axios.create({
  baseURL: "https://illuminatorbackend.up.railway.app/api/v1/products",
  //   baseURL: "http://localhost:8002/api/v1/products",
  headers: {
    role: "admin"
  }
});

export default productApi;
