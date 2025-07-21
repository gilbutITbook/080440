import { useCountContext } from "../hooks/useCountContext";

export default function CountDisplay() {
  console.log("CountDisplay rendering");
  const { count } = useCountContext();
  return <h1>Count: {count}</h1>;
}
