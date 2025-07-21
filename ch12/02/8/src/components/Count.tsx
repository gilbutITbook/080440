import CountDisplay from "./CountDisplay";
import CountButtons from "./CountButtons";

export default function Count() {
  console.log("Count rendering");
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
