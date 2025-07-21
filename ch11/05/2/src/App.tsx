import { lazy, Suspense, useState } from "react";
type LazyModuleDefault = typeof import("./components/LazyComponent").default;

const LazyComponent = lazy<LazyModuleDefault>(
  () =>
    new Promise<{ default: LazyModuleDefault }>((resolve) => {
      setTimeout(() => {
        import("./components/LazyComponent").then((mod) => {
          resolve(mod);
        });
      }, 2000);
    })
);

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((s) => !s)}>Toggle</button>
      {/* {isShow && <LazyComponent />} */}
      {isShow && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  );
}
