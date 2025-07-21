export function updateName(name: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.toLowerCase() === "홍길동") {
        // 이름이 error이면 reject() 호출
        reject(new Error("이름 변경에 실패했습니다."));
      } else {
        // 정상이면 오류 없이 성공 처리(null 반환)
        resolve(null);
      }
    }, 1000); // 1초 지연 시뮬레이션
  });
}
