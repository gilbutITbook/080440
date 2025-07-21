import { useCountContext } from "../hooks/useCountContext";

export default function CountOutsideDisplay() {
  console.log("CountOutsideDisplay rendering");
  const { count } = useCountContext();
  return <h1>Outside Count: {count}</h1>;
}
