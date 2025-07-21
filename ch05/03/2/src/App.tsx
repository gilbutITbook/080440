import { twMerge } from "tailwind-merge";

export default function App() {
  return (
    <>
      <button
        className={twMerge(
          "bg-transparent text-[#bf4f74] rounded-[3px] border-2 border-[#bf4f74] m-[0.1em] py-[0.25em] px-[1em]",
          "bg-rose-500 text-white"
        )}
      >
        Click Me
      </button>
    </>
  );
}
