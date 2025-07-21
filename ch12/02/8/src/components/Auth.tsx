import { useAuthContext } from "../hooks/useAuthContext";

export default function Auth() {
  console.log("Auth rendering");
  const { isLogin, login, logout } = useAuthContext();
  return (
    <>
      <h1>login: {isLogin.toString()}</h1>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
    </>
  );
}
