import { useEffect, useState } from "react";

export default function AutoSaveForm() {
  const [formData, setFormData] = useState(
    () => localStorage.getItem("savedFormData") || ""
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem("savedFormData", formData);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [formData]);
  return (
    <textarea
      value={formData}
      onChange={(e) => setFormData(e.target.value)}
      placeholder="입력한 내용을 자동으로 저장합니다."
    />
  );
}
