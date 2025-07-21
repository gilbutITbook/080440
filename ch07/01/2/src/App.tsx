// export default function App() {
//   const isLogin = true;
//   return isLogin ? (
//     <>
//       <h1>환영합니다!</h1>
//       <p>로그인했습니다.</p>
//     </>
//   ) : (
//     <>
//       <h1>로그인해야 합니다.</h1>
//       <p>서비스를 이용하려면 로그인해 주세요.</p>
//     </>
//   );
// }
import Login from "./components/Login";
import Logout from "./components/Logout";
import LoginMessage from "./components/LoginMessage";
import LogoutMessage from "./components/LogoutMessage";

export default function App() {
  const isLogin = false;
  return isLogin ? (
    <>
      <Login />
      <LoginMessage />
    </>
  ) : (
    <>
      <Logout />
      <LogoutMessage />
    </>
  );
}
