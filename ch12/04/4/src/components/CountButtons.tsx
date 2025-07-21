import { useEffect } from "react";
import { useCounterStore } from "../store/counterStore";

export default function CountButtons() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const resetIfEven = useCounterStore((state) => state.resetIfEven);
  useEffect(() => {
    const unsubscribe = useCounterStore.subscribe(
      // 상태 구독 설정
      (state) => state.count, // 구독할 상태 선택
      (newCount) => {
        // 상태가 변경될 때 실행할 함수
        console.log("Count has changed to:", newCount);
      }
    );
    return () => {
      // 컴포넌트 언마운트 시 구독 해제
      unsubscribe();
    };
  }, []);

  return (
    <>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
      <button onClick={resetIfEven}>초기화(짝수)</button>
      <button onClick={increment}>증가</button>
    </>
  );
}
