import { useState } from "react";

export default function App() {
  const users = [
    { name: "Alice", isActive: true, role: "Admin" },
    { name: "Bob", isActive: false, role: "User" },
    { name: "Charlie", isActive: true, role: "User" },
    { name: "David", isActive: true, role: "Guest" },
    { name: "Eve", isActive: true, role: "Admin" },
  ];

  const [selectedRole, setSelectedRole] = useState("All");

  // 필터링된 사용자 목록 생성
  const filteredUsers = users.filter((user) => {
    if (selectedRole === "All") return true; // 모든 사용자
    return user.role === selectedRole; // 선택된 역할만
  });

  return (
    <div>
      <h1>User List</h1>

      {/* 역할 필터 버튼 */}
      <button onClick={() => setSelectedRole("All")}>All</button>
      <button onClick={() => setSelectedRole("Admin")}>Admin</button>
      <button onClick={() => setSelectedRole("User")}>User</button>
      <button onClick={() => setSelectedRole("Guest")}>Guest</button>

      {/* 사용자 목록 렌더링 */}
      <ul>
        {filteredUsers.map((user, index) => (
          <li
            key={index}
            style={{
              backgroundColor: user.isActive
                ? user.role === "Admin"
                  ? "red"
                  : user.role === "User"
                  ? "blue"
                  : "yellow"
                : "gray",
              color: user.isActive ? "white" : "black",
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
            }}
          >
            {user.isActive ? user.name : `${user.name} (Inactive)`}
          </li>
        ))}
      </ul>
    </div>
  );
}
