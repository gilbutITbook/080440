import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLogin, setIsLogin] = useState(false);
  const login = () => setIsLogin(true);
  const logout = () => setIsLogin(false);

  return (
    <AuthContext value={{ isLogin, login, logout }}>{children}</AuthContext>
  );
}
