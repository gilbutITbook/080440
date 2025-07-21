import TodoEditor from "./components/TodoEditor";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="todo">
      <TodoHeader />
      <TodoEditor />
      <TodoList />
    </div>
  );
}
