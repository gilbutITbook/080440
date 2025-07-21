import { useState } from "react";
import Fetch from "./components/Fetch";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>노출 변경</button>
      {isShow && <Fetch />}
    </>
  );
}
