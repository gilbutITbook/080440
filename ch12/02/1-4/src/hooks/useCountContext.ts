import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

export function useCountContext() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(
      "useCountContext는 CountContext로 감싼 컴포넌트 안에서만 호출할 수 있습니다."
    );
  }
  return context;
}
