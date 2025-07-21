import { useRef, type FormEvent } from "react";

export default function Radio3() {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedGender = formData.get("gender");
    const selectedColor = formData.get("color");
    console.log("Selected gender:", selectedGender);
    console.log("Selected color:", selectedColor);
  };
  const clickHandler = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const selectedGender = formData.get("gender");
      const selectedColor = formData.get("color");
      console.log("Selected gender:", selectedGender);
      console.log("Selected color:", selectedColor);
    }
  };
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>
          <input type="radio" name="gender" value="male" defaultChecked />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="color" value="red" defaultChecked />
          Red
        </label>
        <label>
          <input type="radio" name="color" value="blue" />
          Blue
        </label>
      </div>
      <button type="button" onClick={clickHandler}>
        선택 값 확인하기
      </button>
      <button type="submit">제출</button>
    </form>
  );
}
