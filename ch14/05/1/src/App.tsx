import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/todos");
      if (!response.ok) {
        throw new Error("데이터를 불러오지 못했습니다.");
      }
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
