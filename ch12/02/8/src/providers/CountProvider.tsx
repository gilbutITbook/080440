import { useMemo, useState } from "react";
import { CountActionContext, CountContext } from "../contexts/CountContext";

export default function CountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(0);
  const memoizedValue = useMemo(() => ({ increment, decrement, reset }), []);
  return (
    <>
      <CountActionContext value={memoizedValue}>
        <CountContext value={{ count }}>{children}</CountContext>
      </CountActionContext>
    </>
  );
}
