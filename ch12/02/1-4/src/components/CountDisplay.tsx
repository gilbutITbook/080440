import { useCountContext } from "../hooks/useCountContext";

export default function CountDisplay() {
  const { count } = useCountContext();
  return <h1>Count: {count}</h1>;
}
