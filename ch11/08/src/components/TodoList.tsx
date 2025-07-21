import TodoListItem from "./TodoListItem";
import TodoListItemEmpty from "./TodoListItemEmpty";

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  modifyTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, title: string) => void;
}) {
  return (
    <ul className="todo__list">
      {todos.length === 0 && <TodoListItemEmpty />}
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            modifyTodo={modifyTodo}
          />
        ))}
    </ul>
  );
}
