import { useRef } from "react";

export default function Input4() {
  const formRef = useRef<{
    id: HTMLInputElement | null;
    password: HTMLInputElement | null;
    date: HTMLInputElement | null;
  }>({
    id: null,
    password: null,
    date: null,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { id, password, date } = formRef.current;
    console.log("Submitted values: ", {
      id: id?.value,
      password: password?.value,
      date: date?.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" ref={(el) => (formRef.current.id = el)} />
      <input
        type="password"
        name="password"
        ref={(el) => (formRef.current.password = el)}
      />
      <input
        type="date"
        name="date"
        ref={(el) => (formRef.current.date = el)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
