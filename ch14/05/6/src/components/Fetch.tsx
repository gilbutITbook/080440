import { useFetch } from "../hooks/useFetch";

export default function Fetch() {
  const { data, error, isLoading } = useFetch<
    { id: number; title: string; done: boolean }[]
  >("http://localhost:3000/todos", []);
  const {
    data: users,
    error: usersError,
    isLoading: isUsersLoading,
  } = useFetch<{ id: number; name: string; age: number }[]>(
    "http://localhost:3000/users",
    []
  );

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  if (isUsersLoading) return <div>로딩 중...</div>;
  if (usersError) return <div>{usersError}</div>;

  return (
    <div>
      <p>Todos</p>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <p>Users</p>
      <ul>
        {users.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}
