import { useReducer } from "react";
import { counterReducer } from "./reducer/counterReducer";

export default function App() {
  const [count, countDispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>초기화</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
    </div>
  );
}
