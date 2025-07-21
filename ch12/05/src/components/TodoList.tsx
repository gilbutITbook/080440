import { useTodoStore } from "../store/todoStore";
import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <ul className="todo__list">
      {todos.length === 0 && <TodoListItemEmpty />}
      {todos.length > 0 &&
        todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  );
}
