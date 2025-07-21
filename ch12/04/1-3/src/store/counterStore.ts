import { create } from "zustand";
interface CounterStoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  resetIfEven: () => void;
}
export const useCounterStore = create<CounterStoreState>((set, get) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })), // 기존 상태 기반
  decrement: () => set((state) => ({ count: state.count - 1 })), // 기존 상태 기반
  reset: () => set({ count: 0 }), // 새 상태 직접 지정
  resetIfEven: () => {
    const { count } = get();
    if (count % 2 === 0) {
      set({ count: 0 });
    }
  },
}));
