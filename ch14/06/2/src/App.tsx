import { useState, useTransition } from "react";
import { updateName } from "./api/updateName";

export default function App() {
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await updateName(inputName);
        setName(inputName);
      } catch (e) {
        setError(e instanceof Error ? e.message : "알 수 없는 오류 발생");
      }
    });
  };
  return (
    <div>
      <p>현재 이름: {name}</p>
      <input
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />
      <button onClick={handleSubmit} disabled={isPending}>
        변경
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
