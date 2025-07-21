export default function CountButtons({
  increment,
  decrement,
  reset,
}: {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}) {
  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
