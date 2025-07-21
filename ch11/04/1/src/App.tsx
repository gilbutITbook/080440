import { useState } from "react";
import { initialItems } from "./lib/utils";

export default function App() {
  // 상태 정의
  const [count, setCount] = useState(0);
  // 3천만 개 항목 중 selected가 true인 항목 찾기
  const selectItems = initialItems.find((item) => item.selected);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>
      {/* 연산 비용이 높은 코드 */}
      <p>{selectItems?.id}</p>
    </>
  );
}
