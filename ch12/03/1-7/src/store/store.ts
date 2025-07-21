import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice.ts";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  }, // 리듀서 등록 위치
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
