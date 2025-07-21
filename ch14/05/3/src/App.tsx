import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState<
    { id: number; title: string; done: boolean }[]
  >([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error("데이터를 불러오지 못했습니다.");
        }
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(
          e instanceof Error ? e.message : "알 수 없는 오류가 발생했습니다."
        );
      }
    };
    fetchData();
  }, []);
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <ul>
        {/* 타입 오류 발생 */}
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
