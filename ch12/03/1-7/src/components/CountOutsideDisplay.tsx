import { useSelector } from "react-redux";
import { type RootState } from "../store/store";

export default function CountOutsideDisplay() {
  const count = useSelector((state: RootState) => state.counter.value);
  return <h1>Outside Count: {count}</h1>;
}
