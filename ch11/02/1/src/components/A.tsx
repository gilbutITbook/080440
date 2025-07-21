import React from "react";
import B from "./B";

export default React.memo(function A() {
  console.log("A render");
  return (
    <>
      <h1>A Component</h1>
      <B />
    </>
  );
});
