import { useState } from "react";

export default function App() {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);

  const clickHandler = () => {
    setName("Mike"); // 타입 오류 발생
    setAge(23); // 타입 오류 발생
    setGender("female"); // 타입 오류 발생
  };
  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>성별: {gender}</p>
      <button onClick={clickHandler}>변경</button>
    </div>
  );
}
