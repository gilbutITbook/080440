import { use } from "react";
import { TodoActionContext, TodoContext } from "../contexts/TodoContext";

export function useTodoContext() {
  const context = use(TodoContext);
  if (!context) {
    throw new Error(
      "useTodoContex는 TodoProvider로 감싼 컴포넌트 안에서만 호출할 수 있습니다."
    );
  }
  return context;
}

export function useTodoActionContext() {
  const context = use(TodoActionContext);
  if (!context) {
    throw new Error(
      "useTodoActionContext는 TodoProvider로 감싼 컴포넌트 안에서만 호출할 수 있습니다."
    );
  }
  return context;
}
