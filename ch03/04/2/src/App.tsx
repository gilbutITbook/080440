import User from "./components/User";
export default function App() {
  const userObj = {
    name: "철수",
    age: 20,
  };
  const clickHandler = () => {
    console.log("clicked");
  };
  return <User userObj={userObj} clickHandler={clickHandler} />;
}
