export default function App() {
  const items = [
    <li key="1">사과</li>,
    <li key="2">바나나</li>,
    <li key="3">딸기</li>,
  ];
  return (
    <div>
      <ul>
        {items.reduce<React.ReactNode[]>((acc, item) => {
          acc.push(item);
          return acc;
        }, [])}
      </ul>
    </div>
  );
}
