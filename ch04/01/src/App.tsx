import { useState } from "react";

export default function App() {
  interface User {
    name: string;
    age: number;
  }
  const [user, setUser] = useState<User>({ name: "Alice", age: 25 });
  const [count, setCount] = useState(0); // 초깃값: 0
  const increment = () => {
    setCount((count) => count + 1); // 이전 값에서 1 증가
  };

  return (
    <>
      <h1>App Component</h1>
    </>
  );
}
