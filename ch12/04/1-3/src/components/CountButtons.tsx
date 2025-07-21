import { useCounterStore } from "../store/counterStore";

export default function CountButtons() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const resetIfEven = useCounterStore((state) => state.resetIfEven);
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
      <button onClick={resetIfEven}>초기화(짝수)</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
