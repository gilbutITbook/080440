import { useState } from "react";
export default function Input() {
  // input[type="text"]
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  // input[type="password"]
  const [password, setPassword] = useState("");
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // input[type="date"]
  const [date, setDate] = useState("");
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  return (
    <>
      <form>
        <h1>
          ID: {value} / Password: {password} / Date: {date}
        </h1>
        <input type="text" value={value} onChange={handleChange} />
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <input type="date" value={date} onChange={handleChangeDate} />
      </form>
    </>
  );
}
