import { useReducer } from 'react';
import { itemReducer } from './reducer/itemReducer';

export default function App() {
  const initialState: Item = {
    items: [], // 아이템을 저장할 배열
    availableItems: ['사과', '바나나', '오렌지'], // 추가 가능한 아이템 목록
  };

  const [state, dispatch] = useReducer(itemReducer, initialState);

  const handleAddItem = () => {
    dispatch({ type: 'ADD_ITEM' });
  };

  const handleRemoveItem = (index: number) => {
    dispatch({ type: 'REMOVE_ITEM', index });
  };

  return (
    <div>
      <h1>아이템 목록</h1>
      <button onClick={handleAddItem} disabled={state.items.length === 3}>
        아이템 추가
      </button>

      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
