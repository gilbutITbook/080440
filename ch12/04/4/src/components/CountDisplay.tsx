import { useCounterStore } from "../store/counterStore";

export default function CountDisplay() {
  const count = useCounterStore((state) => state.count);
  return <h1>Count: {count}</h1>;
}
