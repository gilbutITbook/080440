import { useMemo, useState } from "react";
import { TodoContext, TodoActionContext } from "../contexts/TodoContext";

export default function TodoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((todos) => [
      ...todos,
      { id: new Date().getTime(), title, done: false },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const modifyTodo = (id: number, title: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const memoizedActions = useMemo(
    () => ({ addTodo, deleteTodo, modifyTodo, toggleTodo }),
    []
  );

  return (
    <TodoActionContext value={memoizedActions}>
      <TodoContext value={{ todos }}>{children}</TodoContext>
    </TodoActionContext>
  );
}
