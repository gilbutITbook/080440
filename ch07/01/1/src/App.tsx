import Login from "./components/Login";
import LoginMessage from "./components/LoginMessage";
import Logout from "./components/Logout";
import LogoutMessage from "./components/LogoutMessage";

export default function App() {
  const isLogin = false;

  if (isLogin)
    return (
      <>
        <Login />
        <LoginMessage />
      </>
    );
  return (
    <>
      <Logout />
      <LogoutMessage />
    </>
  );
}
