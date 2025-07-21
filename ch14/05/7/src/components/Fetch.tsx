import { useAxios } from "../hooks/useAxios";

export default function Fetch() {
  const { data, error, isLoading } = useAxios<
    { id: number; title: string; done: boolean }[]
  >("/todos", []);
  const {
    data: users,
    error: usersError,
    isLoading: isUsersLoading,
  } = useAxios<{ id: number; name: string; age: number }[]>("/users", []);

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
