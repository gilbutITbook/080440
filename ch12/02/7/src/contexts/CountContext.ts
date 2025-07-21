import { createContext } from "react";

interface CountContextType {
  count: number;
}
interface CountActionContextType {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CountContext = createContext<CountContextType | null>(null);
export const CountActionContext = createContext<CountActionContextType | null>(
  null
);
