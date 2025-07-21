// reducer/userReducer.ts
interface UserState {
  name?: string;
  email?: string;
}

type UserAction =
  | { type: "SET_USER"; payload: UserState }
  | { type: "CLEAR_USER" };

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "CLEAR_USER":
      return {};
    default:
      return state;
  }
};
