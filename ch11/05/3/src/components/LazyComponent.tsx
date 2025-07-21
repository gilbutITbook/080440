export default function LazyComponent() {
  // 숫자 1 또는 2 생성
  const random = Math.floor(Math.random() * 2) + 1;
  // 1이면 오류 발생
  if (random === 1) {
    throw new Error("random number is 1");
  }
  return <div>LazyComponent</div>;
}
