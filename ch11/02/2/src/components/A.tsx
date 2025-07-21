import { memo } from "react";
import B from "./B";

export default memo(function A({ count }: { count: number }) {
  console.log("A render");
  return (
    <>
      <h1>A Component: {count}</h1>
      <B />
    </>
  );
});
