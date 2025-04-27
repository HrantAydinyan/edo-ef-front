import axios from "axios";

const base_url = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: base_url,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
