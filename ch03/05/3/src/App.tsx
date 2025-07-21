export default function App() {
  const clickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    msg: string
  ) => {
    console.log(e);
    alert(msg);
  };
  return (
    <>
      <button onClick={(e) => clickHandler(e, "Hello")}>click</button>
    </>
  );
}
