export function itemReducer(state: Item, action: ReducerAcion) {
  switch (action.type) {
    case "ADD_ITEM":
      // availableItems에서 아이템을 하나씩 추가
      if (state.items.length < 3) {
        const newItem = state.availableItems.filter(
          (item) => !state.items.includes(item)
        )[0];
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
      return state;

    case "REMOVE_ITEM":
      // 아이템 삭제
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.index),
      };
    default:
      return state;
  }
}
