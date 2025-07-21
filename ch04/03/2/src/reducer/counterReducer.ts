export function counterReducer(state: number, action: { type: string }) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
