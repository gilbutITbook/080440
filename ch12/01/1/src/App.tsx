import { useState } from "react";
import Count from "./components/Count";
import CountOutsideDisplay from "./components/CountOutsideDisplay";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <Count
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      <CountOutsideDisplay count={count} />
    </>
  );
}
