import { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000); // 1초마다 seconds 값을 1씩 증가
    return () => clearInterval(interval); // 언마운트 시 타이머 정리
  }, []); // 빈 배열이므로 마운트 시점에 한 번만 실행
  return <p>timer: {seconds} seconds</p>;
}
