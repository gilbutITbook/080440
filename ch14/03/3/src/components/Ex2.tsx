import { useState } from "react";

export default function Ex2() {
  const [todoId, setTodoId] = useState("");
  const [todos, setTodos] = useState<
    { id: number; title: string; done: boolean }[]
  >([]);
  // GET 요청: 할 일 목록 조회
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };
  // POST 요청: 할 일 추가
  const postTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "New Todo",
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTodos([...todos, data]);
    } catch (error) {
      console.error(error);
    }
  };
  // PATCH 요청: 완료 상태 토글
  const toggleTodo = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/todos/${todoId}/done `,
        {
          method: "PATCH",
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setTodos(
        todos.map((todo) =>
          todo.id === Number(todoId) ? { ...todo, done: data.done } : todo
        )
      );
    } catch (error) {
      console.error(error);
    }
  };
  // PUT 요청: 할 일 수정
  const updateTodo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Updated Todo",
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTodos(todos.map((todo) => (todo.id === Number(todoId) ? data : todo)));
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE 요청: 할 일 삭제
  const deleteTodo = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${todoId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
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
