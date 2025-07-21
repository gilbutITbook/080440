import { useActionState, useOptimistic, useState } from "react";
import { updateName } from "./api/updateName";

export default function App() {
  const [name, setName] = useState("");
  const [optName, setOptName] = useOptimistic(
    name,
    (_, optimisticValue: string) => {
      return optimisticValue;
    }
  );
  const [error, submitAction, isPending] = useActionState(
    async (_: string | null, formData: FormData) => {
      try {
        setOptName(formData.get("name") as string);
        await updateName(formData.get("name") as string);
        setName(formData.get("name") as string);
        return null;
      } catch (e) {
        return e instanceof Error ? e.message : "알 수 없는 오류 발생";
      }
    },
    null
  );

  return (
    <div>
      <p>현재이름: {optName}</p>
      <form action={submitAction}>
        <input name="name" />
        <button disabled={isPending}>변경</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
