import { createContext } from "react";

interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
export const CountContext = createContext<CountContextType | null>(null);
