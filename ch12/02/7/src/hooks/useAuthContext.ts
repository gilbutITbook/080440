import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext AuthProvider로 감싼 컴포넌트 안에서만 호출할 수 있습니다."
    );
  }
  return context;
}
