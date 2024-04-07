import axios from "axios";
axios.defaults.withCredentials = true;

// https://illuminatorbackend.up.railway.app/api/v1/admin

const adminApi = axios.create({
  // baseURL: "https://illuminatorbackend.up.railway.app/api/v1/admin",
  baseURL: "http://localhost:8002/api/v1/admin",
  headers: {
    role: "admin"
  }
});

export default adminApi;
