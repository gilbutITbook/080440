import { createContext } from "react";

interface AuthContextType {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
