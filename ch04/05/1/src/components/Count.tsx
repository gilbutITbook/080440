export default function Count({
  count,
  increment,
}: {
  count: number;
  increment: () => void;
}) {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>증가</button>
    </div>
  );
}
