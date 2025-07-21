import { useFormStatus } from "react-dom";

function UpdateName() {
  const { pending, data } = useFormStatus();
  return (
    <>
      <input name="name" />
      <button disabled={pending}>변경</button>
      {data && <p>{data.get("name") as string}</p>}
    </>
  );
}
export default UpdateName;
