import { useState, useTransition } from "react";
import SlowList from "./components/SlowList";

export default function App() {
  const [query, setQuery] = useState("");
  const [defferedValue, setDeferredValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    startTransition(() => setDeferredValue(newQuery));
  };
  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {isPending ? <div>Loading</div> : <SlowList query={defferedValue} />}
    </div>
  );
}
