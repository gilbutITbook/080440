import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface TodoStoreState {
  todos: Todo[];
}
interface TodoStoreActions {
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  modifyTodo: (id: number, title: string) => void;
}

export const useTodoStore = create<TodoStoreState & TodoStoreActions>()(
  persist(
    immer((set) => ({
      todos: [],
      addTodo: (title) =>
        set((state) => {
          state.todos.push({
            id: new Date().getTime(),
            title,
            done: false,
          });
        }),
      deleteTodo: (id) =>
        set((state) => {
          state.todos = state.todos.filter((todo: Todo) => todo.id !== id);
        }),
      toggleTodo: (id) =>
        set((state) => {
          state.todos = state.todos.map((todo: Todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          );
        }),
      modifyTodo: (id, title) =>
        set((state) => {
          state.todos = state.todos.map((todo: Todo) =>
            todo.id === id ? { ...todo, title } : todo
          );
        }),
    })),
    { name: "todos" }
  )
);
