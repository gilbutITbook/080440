import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  );
}
