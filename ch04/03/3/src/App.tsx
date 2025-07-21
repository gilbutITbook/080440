import { useReducer } from "react";
import { counterReducer } from "./reducer/counterReducer";
import { cartReducer } from "./reducer/cartReducer";
import { userReducer } from "./reducer/userReducer";

export default function App() {
  // 카운터 상태 관리
  const [count, countDispatch] = useReducer(counterReducer, 0);
  // 사용자 상태 관리
  const [user, userDispatch] = useReducer(userReducer, {});
  // 장바구니 상태 관리
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  return (
    <div>
      {/* 각 상태를 사용한 UI 구성 */}
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>
        증가{" "}
      </button>
      <h2>User: {user.name}</h2>
      <button
        onClick={() =>
          userDispatch({ type: "SET_USER", payload: { name: "Alice" } })
        }
      >
        Set User
      </button>
      <h3>Cart Items: {cart.length}</h3>
      <button
        onClick={() =>
          cartDispatch({ type: "ADD_ITEM", payload: { id: 1, name: "Item 1" } })
        }
      >
        Add Item
      </button>
    </div>
  );
}
