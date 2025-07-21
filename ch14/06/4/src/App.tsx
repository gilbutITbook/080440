import { useRef, useState } from "react";
import { updateName } from "./api/updateName";
import UpdateName from "./components/UpdateName";

export default function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formData: FormData) => {
    try {
      await updateName(formData.get("name") as string);
      setName(formData.get("name") as string);
    } catch (e) {
      setError(e instanceof Error ? e.message : "알 수 없는 오류 발생");
    }
  };
  return (
    <div>
      <p>현재 이름: {name}</p>
      <form
        ref={ref}
        action={async (formData) => {
          await handleSubmit(formData);
          ref.current?.reset();
        }}
      >
        <UpdateName />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
