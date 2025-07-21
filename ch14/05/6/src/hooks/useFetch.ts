import { useState, useEffect } from "react";

export function useFetch<T>(url: string, initialData: T) {
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("데이터를 불러오지 못했습니다.");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (e) {
        if (e instanceof Error && e.name !== "AbortError") {
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
  return { data, error, isLoading };
}
