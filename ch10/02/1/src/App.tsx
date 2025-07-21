// import { useState } from "react";
// import UnMount from "./components/UnMount";

// export default function App() {
//   const [show, setShow] = useState(true);
//   return (
//     <>
//       {show && <UnMount />}
//       <button onClick={() => setShow(!show)}>Toggle</button>
//     </>
//   );
// }

import LifeCycle from "./components/LifeCycle";

export default function App() {
  return <LifeCycle />;
}
