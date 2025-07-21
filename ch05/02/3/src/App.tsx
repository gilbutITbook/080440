import { container, button, active } from "./App.css.ts";
export default function App() {
  const isActive = false;
  return (
    <div className={container}>
      <button className={`${button} ${isActive && active}`}>Click me</button>
    </div>
  );
}
