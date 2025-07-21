import { useDeferredValue, useState } from "react";
import SlowList from "./components/SlowList";

export default function App() {
  const [query, setQuery] = useState("");
  const deferredValue = useDeferredValue(query);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SlowList query={deferredValue} />
    </div>
  );
}
