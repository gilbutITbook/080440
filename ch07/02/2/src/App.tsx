import ListItem from "./components/ListItem";

export default function App() {
  const items = ["사과", "바나나", "딸기"];
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </ul>
  );
}
