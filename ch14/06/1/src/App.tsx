import { useState } from "react";
import { updateName } from "./api/updateName";

export default function App() {
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = async () => {
    try {
      setIsPending(true);
      await updateName(inputName);
      setIsPending(false);
      setName(inputName);
    } catch (e) {
      setError(e instanceof Error ? e.message : "알 수 없는 오류 발생");
    }
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
