import { useRef } from "react";

export default function Checkbox2() {
  const agree1Ref = useRef<HTMLInputElement>(null);
  const agree2Ref = useRef<HTMLInputElement>(null);
  const agree3Ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formState = {
      agree1: agree1Ref.current?.checked,
      agree2: agree2Ref.current?.checked,
      agree3: agree3Ref.current?.checked,
    };
    console.log("동의 1:", formState.agree1);
    console.log("동의 2:", formState.agree2);
    console.log("동의 3:", formState.agree3);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="checkbox" id="ag1" name="agree1" ref={agree1Ref} />
        <label htmlFor="ag1">동의 1</label>
      </div>
      <div>
        <input type="checkbox" id="ag2" name="agree2" ref={agree2Ref} />
        <label htmlFor="ag2">동의 2</label>
      </div>
      <div>
        <input type="checkbox" id="ag3" name="agree3" ref={agree3Ref} />
        <label htmlFor="ag3">동의 3</label>
      </div>
      <button type="submit">제출</button>
    </form>
  );
}
