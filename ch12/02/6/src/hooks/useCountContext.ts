import { useContext } from "react";
import { CountActionContext, CountContext } from "../contexts/CountContext";

export function useCountContext() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(
      "useCountContext는 CountContext 감싼 컴포넌트 안에서만 호출할 수 있습니다."
    );
  }
  return context;
}
export function useCountActionContext() {
  const context = useContext(CountActionContext);
  if (!context) {
    throw new Error(
      "useCountActionContext CountContext 감싼 컴포넌트 안에서만 호출할 수 있습니다."
    );
  }
  return context;
}
