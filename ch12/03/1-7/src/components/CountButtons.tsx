import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../store/slice/counterSlice";

export default function CountButtons() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <button onClick={() => dispatch(reset())}>초기화</button>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(incrementByAmount({ count: 10 }))}>
        10 증가
      </button>
    </>
  );
}
