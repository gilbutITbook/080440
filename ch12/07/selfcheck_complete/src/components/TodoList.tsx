import { useTodoContext } from "../hooks/useTodoContext";
import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList() {
  const { todos } = useTodoContext();
  return (
    <ul className="todo__list">
      {todos.length == 0 && <TodoListItemEmpty />}
      {todos.length > 0 &&
        todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  );
}
