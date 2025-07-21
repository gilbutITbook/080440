import { useEffect, useState } from "react";

export default function Fetch() {
  const [data, setData] = useState<
    { id: number; title: string; done: boolean }[]
  >([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos", {
          signal,
        });
        if (!response.ok) {
          throw new Error("데이터를 불러오지 못했습니다.");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false); // 데이터 요청이 끝나면 로딩 상태를 false로 변경
      } catch (e) {
        if (e instanceof Error && e.name !== "AbortError") {
          setError(e.message || "알 수 없는 오류가 발생했습니다.");
          setIsLoading(false); // 데이터 요청이 끝나면 로딩 상태를 false로 변경
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
