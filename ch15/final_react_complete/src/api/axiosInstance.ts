import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

let retry = false;
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403 && !retry) {
      retry = true;
      try {
        const { data, status } = await axiosInstance.post("/token");
        if (status == 200) {
          useAuthStore.setState({
            user: data.user,
            accessToken: data.accessToken,
          });
          retry = false;
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;
          return axiosInstance(originalRequest);
        } else {
          throw new Error("토큰 업데이트 실패");
        }
      } catch {
        useAuthStore.setState({ user: null, accessToken: null });
      }
    }
    return Promise.reject(error);
  }
);
