export default function ScrollDiv() {
  const handleScroll = (event: Event) => {
    const target = event.target as HTMLDivElement;
    console.log("div scrollTop:", target.scrollTop);
  };
  return (
    <div
      ref={(currentDiv) => {
        currentDiv?.addEventListener("scroll", handleScroll);
        // 클린업 함수: 언마운트되기 전에 호출됨
        return () => {
          currentDiv?.removeEventListener("scroll", handleScroll);
        };
      }}
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
