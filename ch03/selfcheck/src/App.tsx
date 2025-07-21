import Button from "./components/Button";

export default function App() {
  return (
    <>
      <Button handleClick={() => alert("login")}>login</Button>
      <Button handleClick={() => alert("logout")}>logout</Button>
    </>
  );
}
