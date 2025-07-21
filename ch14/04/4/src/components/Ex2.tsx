import axios from "axios";
import { useState } from "react";

export default function Ex2() {
  const [todoId, setTodoId] = useState("");
  const [todos, setTodos] = useState<
    { id: number; title: string; done: boolean }[]
  >([]);
  const getTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const postTodo = async () => {
    try {
      const response = await axios.post("http://localhost:3000/todos", {
        title: "New Todo",
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  const toggleTodo = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/todos/${todoId}/done`
      );
      setTodos(
        todos.map((todo) =>
          todo.id === Number(todoId)
            ? { ...todo, done: response.data.done }
            : todo
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/todos/${todoId}`,
        {
          title: "Updated Todo",
        }
      );
      setTodos(
        todos.map((todo) => (todo.id === Number(todoId) ? response.data : todo))
      );
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:3000/todos/${todoId}`);
      setTodos(todos.filter((todo) => todo.id !== Number(todoId)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Todos</h1>
      <pre>{JSON.stringify(todos)}</pre>
      {/* 아이디 입력창 */}
      <div>
        <input
          type="text"
          value={todoId}
          onChange={(e) => setTodoId(e.target.value)}
        />
      </div>
      {/* API 호출 버튼: 버튼 클릭 시 각 함수 실행 */}
      <button onClick={getTodos}>Get Todos(GET)</button>
      <button onClick={postTodo}>Insert Todos(POST)</button>
      <button onClick={toggleTodo}>Toggle Todos(PATCH)</button>
      <button onClick={updateTodo}>Update Todos(PUT)</button>
      <button onClick={deleteTodo}>Delete Todos(DELETE)</button>
    </div>
  );
}
