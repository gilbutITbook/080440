import { Suspense } from "react";
import User from "./components/User";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./components/Loading";

const fetchUser = async (id: number) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 지연
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export default function App() {
  const userPromise = fetchUser(1);
  const userPromise2 = fetchUser(2);
  return (
    <>
      <ErrorBoundary fallback={<div>Failed to load User1</div>}>
        <Suspense fallback={<Loading>User1 Loading...</Loading>}>
          <User userPromise={userPromise} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Failed to load User2</div>}>
        <Suspense fallback={<Loading>User2 Loading...</Loading>}>
          <User userPromise={userPromise2} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
