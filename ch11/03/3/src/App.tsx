import { useCallback, useState } from "react";
import A from "./components/A";

export default function App() {
  console.log("App render");
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);
  return (
    <>
      <h1>App Count: {count}</h1>
      <A increment={increment} />
    </>
  );
}
