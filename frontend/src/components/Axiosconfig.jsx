import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true, // Important for cookies
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
