export default function App() {
  const items = ["사과", "바나나", "딸기"];
  const elements: React.ReactNode[] = [];
  items.forEach((item, index) => {
    elements.push(<li key={index}>{item}</li>);
  });
  return <ul>{elements}</ul>;
}
