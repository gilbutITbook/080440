import { useRef } from "react";

export default function Input3() {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = idRef.current?.value;
    const password = passwordRef.current?.value;
    const date = dateRef.current?.value;
    console.log("Submitted values: ", { id, password, date });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" ref={idRef} />
      <input type="password" name="password" ref={passwordRef} />
      <input type="date" name="date" ref={dateRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
