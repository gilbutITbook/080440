import { lazy, useState } from "react";
const LazyComponent = lazy(() => import("./components/LazyComponent"));

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && <LazyComponent />}
    </>
  );
}
