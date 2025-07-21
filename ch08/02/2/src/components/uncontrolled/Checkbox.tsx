import { useRef } from "react";

export default function Checkbox() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isChecked = checkboxRef.current?.checked;
    console.log("Checkbox is", isChecked ? "checked" : "unchecked");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="checkbox" ref={checkboxRef} />
        <label>아이템 1</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
