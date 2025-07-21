import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/index.css";
import { BrowserRouter } from "react-router";
import { axiosInstance } from "./api/axiosInstance.ts";
import { useAuthStore } from "./stores/useAuthStore.ts";
import { ErrorBoundary } from "react-error-boundary";

const refreshUser = async () => {
  try {
    const { data, status } = await axiosInstance.post("/token");
    if (status === 200) {
      useAuthStore.setState({ user: data.user, accessToken: data.accessToken });
    } else {
      throw new Error("Failed to refresh user");
    }
  } catch {
    useAuthStore.setState({ user: null, accessToken: null });
  }
};
const storage = JSON.parse(sessionStorage.getItem("auth-storage") || "{}");
if (storage?.state?.user) {
  refreshUser();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
