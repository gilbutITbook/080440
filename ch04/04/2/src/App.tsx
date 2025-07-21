import { useState } from "react";
import CountDisplay from "./components/CountDisplay";
import CountButtons from "./components/CountButtons";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <CountDisplay count={count} />
      <CountButtons increment={increment} decrement={decrement} reset={reset} />
    </>
  );
}
