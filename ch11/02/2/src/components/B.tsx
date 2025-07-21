import { memo } from "react";
import C from "./C";

export default memo(function B() {
  console.log("B render");
  return (
    <>
      <h1>B Component</h1>
      <C />
    </>
  );
});
