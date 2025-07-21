import { useState, useEffect } from "react";
import { axiosInstance } from "../api/axiosInstance";

export function useAxios<T>(url: string, initialData: T) {
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance(url, { signal });
        setData(data);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error && e.name !== "CanceledError") {
          setError(e.message || "알 수 없는 오류가 발생했습니다.");
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, error, isLoading, setData };
}
