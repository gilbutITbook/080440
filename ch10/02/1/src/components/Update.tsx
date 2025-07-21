import { useEffect, useState } from "react";

export default function Update() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Updated : ${count}`);
  }, [count]);
  return (
    <>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
    </>
  );
}
