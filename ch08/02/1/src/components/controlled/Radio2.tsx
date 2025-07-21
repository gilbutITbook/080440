import { useState } from "react";

export default function Radio2() {
  const [formState, setFormState] = useState({
    gender: "male",
    color: "red",
  });
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <>
      <form>
        <div>
          {" "}
          {/* 성별 그룹 */}
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formState.gender === "male"}
              onChange={handleRadioChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formState.gender === "female"}
              onChange={handleRadioChange}
            />
            Female
          </label>
        </div>
        <div>
          {" "}
          {/* 색상 그룹 */}
          <label>
            <input
              type="radio"
              name="color"
              value="red"
              checked={formState.color === "red"}
              onChange={handleRadioChange}
            />
            Red
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="blue"
              checked={formState.color === "blue"}
              onChange={handleRadioChange}
            />
            Blue
          </label>
        </div>
      </form>
    </>
  );
}
