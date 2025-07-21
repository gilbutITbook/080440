import useInput from "../hooks/useInput";

export default function LoginForm3() {
  const { value: email, onChange: changeEmail } = useInput("");
  const { value: password, onChange: changePassword } = useInput("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="uid">
        <input
          type="text"
          id="uid"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={changeEmail}
        />
      </label>
      <label htmlFor="upw">
        <input
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
