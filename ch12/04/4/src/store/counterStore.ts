import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
interface CounterStoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  resetIfEven: () => void;
}
export const useCounterStore = create<CounterStoreState>()(
  devtools(
    subscribeWithSelector(
      persist(
        immer((set, get) => ({
          count: 0,
          increment: () =>
            set((state) => {
              state.count += 1;
            }),
          decrement: () =>
            set((state) => {
              state.count -= 1;
            }),
          reset: () =>
            set((state) => {
              state.count = 0;
            }),
          resetIfEven: () => {
            const { count } = get();
            if (count % 2 === 0) {
              set((state) => (state.count = 0));
            }
          },
        })),
        {
          name: "counter-store",
        }
      )
    ),
    {
      trace: true,
    }
  )
);
