import { useState } from "react";
import { CountContext } from "../contexts/CountContext";

export default function CountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <CountContext value={{ count, increment, decrement, reset }}>
        {children}
      </CountContext>
    </>
  );
}
