import { useRef, useEffect } from "react";

export default function ScrollDiv() {
  const divRef = useRef<HTMLDivElement>(null); // ref 객체 생성
  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        console.log("div scrollTop:", divRef.current.scrollTop);
      }
    };
    const currentDiv = divRef.current;
    currentDiv?.addEventListener("scroll", handleScroll); // div에 스크롤 이벤트 등록
    return () => {
      // 클린업 함수: removeEventListener()를 호출해 이벤트 정리
      currentDiv?.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={divRef} // 실제 DOM에 ref 연결
      style={{
        border: "1px solid black",
        width: "200px",
        height: "100px",
        overflowY: "scroll",
      }}
    >
      {/* 스크롤 가능한 긴 내용 */}
      {[...Array(20)].map((_, i) => (
        <p key={i}>Item {i + 1}</p>
      ))}
    </div>
  );
}
