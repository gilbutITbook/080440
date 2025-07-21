import Count from "./components/Count";
import CountOutsideDisplay from "./components/CountOutsideDisplay";
import CountProvider from "./providers/CountProvider";

export default function App() {
  return (
    <>
      <CountProvider>
        <Count />
        <CountOutsideDisplay />
      </CountProvider>
    </>
  );
}
