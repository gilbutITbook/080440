import { useCountContext } from "../hooks/useCountContext";

export default function CountButtons() {
  console.log("CountButtons rendering");
  const { increment, decrement, reset } = useCountContext();
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
