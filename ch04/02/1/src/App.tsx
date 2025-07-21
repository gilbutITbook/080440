export default function App() {
  let name = "철수";
  const age = 20;
  const nameChange = () => {
    name = "영희";
    console.log(name);
  };
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={nameChange}>Value Change</button>
    </div>
  );
}
