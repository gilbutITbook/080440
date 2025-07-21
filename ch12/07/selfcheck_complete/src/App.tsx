import TodoEditor from "./components/TodoEditor";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoProvider from "./providers/TodoProvider";

export default function App() {
  return (
    <div className="todo">
      <TodoHeader />
      <TodoProvider>
        {/* 할 일 등록 */}
        <TodoEditor />
        {/* 할 일 목록 */}
        <TodoList />
      </TodoProvider>
    </div>
  );
}
