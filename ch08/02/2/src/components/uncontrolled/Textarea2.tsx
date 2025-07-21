import { useRef } from "react";

export default function Textarea2() {
  const descRef = useRef<HTMLTextAreaElement>(null);
  const introduceRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const descValue = descRef.current?.value;
    const introduceValue = introduceRef.current?.value;
    console.log("Description:", descValue);
    console.log("Introduction:", introduceValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea name="desc" ref={descRef} />
      <textarea name="introduce" ref={introduceRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
