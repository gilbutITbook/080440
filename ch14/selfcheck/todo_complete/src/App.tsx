import { useCallback, useEffect, useState } from 'react';
import TodoEditor from './components/TodoEditor';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { apiRequest } from './api/apiRequest';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [todos, setTodos] = useState<Todo[]>(() =>
    JSON.parse(localStorage.getItem('todos') || '[]')
  );
  const addTodo = (todo: Todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const toggleTodo = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const modifyTodo = useCallback((id: number, title: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRequest('/todos');
        const todos = await response.json();
        setTodos(todos);
      } catch (e) {
        setError(
          e instanceof Error ? e.message : '알 수 없는 에러가 발생하였습니다.'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='todo'>
      <TodoHeader />
      {/* 할 일 등록 */}
      <TodoEditor addTodo={addTodo} />
      {/* 할 일 목록 */}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        modifyTodo={modifyTodo}
      />
    </div>
  );
}
