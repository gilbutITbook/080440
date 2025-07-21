import { useState } from "react";
export default function App() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);

  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    gender: "",
  });

  return <div>App</div>;
}
