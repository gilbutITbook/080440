import { useCountContext } from "../hooks/useCountContext";

export default function CountOutsideDisplay() {
  const { count } = useCountContext();
  return <h1>Outside Count: {count}</h1>;
}
