import { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <form>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>아이템 1({isChecked ? "선택됨" : "미선택"})</label>
    </form>
  );
}
