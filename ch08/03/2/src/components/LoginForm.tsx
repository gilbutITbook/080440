import { useRef, useState } from "react";

export default function LoginForm() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 동작 막기
    if (email.trim() === "") {
      // email 값이 공백이거나 빈 문자열이면
      alert("이메일을 입력해주세요."); // 경고창을 띄우거나
      idRef.current?.focus();
      return; // 함수 실행 종료
    }
    if (password.trim() === "") {
      // password 값이 공백이거나 빈 문자열이면
      alert("비밀번호를 입력해주세요."); // 경고창을 띄우거나
      pwRef.current?.focus();
      return; // 함수 실행 종료
    }
    alert(`이메일: ${email}, 비밀번호: ${password}`);
    setEmail(""); // 이메일 입력 초기화
    setPassword(""); // 비밀번호 입력 초기화
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="uid">
        <input
          ref={idRef}
          type="text"
          id="uid"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={changeEmail}
        />
      </label>
      <label htmlFor="upw">
        <input
          ref={pwRef}
          type="password"
          id="upw"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={changePassword}
        />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}
