import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form>
        <h1>Input: {value}</h1>
        <input type="text" value={value} onChange={handleChange} />
      </form>
    </>
  );
}
