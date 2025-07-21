import { useState } from "react";
import A from "./components/A";

export default function App() {
  console.log("App render");
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  return (
    <>
      <h1>App Count: {count}</h1>
      <A increment={increment} />
    </>
  );
}
