import { useRef } from "react";

export default function Input2() {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value;
    console.log("Submitted value:", inputValue);
  };
  const clickHandler = () => {
    const inputValue = inputRef.current?.value;
    console.log("Clicked value:", inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={clickHandler}>
        Get Value
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}
