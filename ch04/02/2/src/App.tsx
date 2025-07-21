import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount((count) => count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={clickHandler}>증가</button>
    </div>
  );
}
