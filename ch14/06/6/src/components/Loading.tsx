import { useEffect, useState } from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 500); // 네트워크 환경에 따라 적절히 조정
  }, []);
  return <>{isShow && <div>{children}</div>}</>;
}
