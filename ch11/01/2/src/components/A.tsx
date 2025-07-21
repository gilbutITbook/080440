import B from "./B";

export default function A() {
  console.log("A render");
  return (
    <>
      <h1>A Component</h1>
      <B />
    </>
  );
}
