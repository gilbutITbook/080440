import { useEffect, useState } from "react";

export default function LifeCycle() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Mounted`);
    console.log(`Updated : ${count}`);
    return () => {
      console.log("Unmounted");
    };
  }, [count]);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
