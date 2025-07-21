// export default function App() {
//   const items = [
//     <li key="0">아이템 1</li>,
//     <li key="1">아이템 2</li>,
//     <li key="2">아이템 3</li>,
//   ];
//   return <ul>{items}</ul>;
// }
import ListItem from "./components/ListItem";

export default function App() {
  const items = [
    <ListItem key="0" text="아이템 1" />,
    <ListItem key="1" text="아이템 2" />,
    <ListItem key="2" text="아이템 3" />,
  ];
  return <ul>{items}</ul>;
}
