export default function App() {
  const renderItems = [];
  const items = ["사과", "바나나", "딸기"];
  for (let i = 0; i < items.length; i++) {
    renderItems.push(<li key={i}>{items[i]}</li>);
  }
  return (
    <div>
      <ul>{renderItems}</ul>
    </div>
  );
}
