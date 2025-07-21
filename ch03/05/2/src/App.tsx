export default function App() {
  const clickHandler = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <button onClick={clickHandler}>click</button>
    </>
  );
}
