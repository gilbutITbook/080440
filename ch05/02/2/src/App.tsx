import { css } from "@emotion/css";
export default function App() {
  const isActive = false;
  return (
    <button
      className={css`
        background: ${isActive ? "#bf4f74" : "transparent"};
        border-radius: 3px;
        border: 2px solid #bf4f74;
        color: ${isActive ? "white" : "#bf4f74"};
        margin: 0 1em;
        padding: 0.25em 1em;
      `}
    >
      Click Me
    </button>
  );
}
