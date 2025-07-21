import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}
const initialState: CounterState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<{ count: number }>) => {
      state.value += action.payload.count;
    },
  },
});
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
