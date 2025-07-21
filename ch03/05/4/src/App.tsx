export default function App() {
  const handleCapture = () => {
    console.log("Parent");
  };
  const handleBubble = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    console.log("Child");
  };
  return (
    <div
      onClick={handleCapture}
      style={{ padding: "50px", backgroundColor: "#f0f0f0" }}
    >
      Parent
      <button onClick={handleBubble} style={{ marginTop: "20px" }}>
        Click Me
      </button>
    </div>
  );
}

/* export default function App() {
  const handleCapture = () => {
    console.log("Parent");
  };
  const handleBubble = () => {
    console.log("Child");
  };
  return (
    <div
      onClick={handleCapture}
      style={{ padding: "20px", backgroundColor: "#ccc" }}
    >
      Parent
      <button onClick={handleBubble} style={{ marginTop: "20px" }}>
        Click Me
      </button>
    </div>
  );
}
 */
/* 
export default function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" name="email" />
      <input type="password" />
      <button type="submit">전송</button>
    </form>
  );
} */
