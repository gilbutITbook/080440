import { useRef, useState } from "react";
import Input from "./components/InputReact18";
import Button from "./components/Button";

export default function App() {
  const userInputEl = useRef<HTMLInputElement>(null);
  const passwordInputEl = useRef<HTMLInputElement>(null);

  // 아이디, 비밀번호, 오류, 로딩 상태 관리
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // 로그인 폼 제출 이벤트 핸들러
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    if (!username) {
      // username 필드가 비어 있으면 오류 메시지 출력
      alert("아이디를 입력하세요.");
      userInputEl.current?.focus();
      return;
    }
    if (!password) {
      // password 필드가 비어 있으면 오류 메시지 출력
      alert("비밀번호를 입력하세요.");
      passwordInputEl.current?.focus();
      return;
    }
  };
  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <Input
          ref={userInputEl}
          label="아이디"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디 입력"
        />
        <Input
          ref={passwordInputEl}
          label="비밀번호"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호 입력"
        />
        <Button type="submit">로그인</Button>
      </form>
    </div>
  );
}
