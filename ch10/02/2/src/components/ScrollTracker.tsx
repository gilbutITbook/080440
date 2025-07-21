import { useEffect } from "react";

export default function ScrollTracker() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("현재 스크롤 위치:", window.scrollY);
    };
    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 등록
    return () => {
      window.removeEventListener("scroll", handleScroll); // 언마운트 시 이벤트 제거
    };
  }, []); // 마운트 시 한 번만 실행
  return <div style={{ height: "200vh" }}>스크롤해 보세요.</div>;
}
