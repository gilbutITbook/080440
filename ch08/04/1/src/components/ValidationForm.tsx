import { useState } from "react";

export default function ValidationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    birthdate: "",
    phone: "",
    website: "",
    color: "#000000",
    rating: "5",
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    // 모든 입력 요소의 유효성 검사 결과 확인
    if (form.checkValidity()) {
      setSubmitStatus("success");
      console.log("폼 데이터:", formData);
    } else {
      setSubmitStatus("error");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>회원 가입</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            사용자 이름
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              minLength={3}
              maxLength={20}
              pattern="[A-Za-z0-9]+"
              title="3-20자 사이의 영문자와 숫자만 사용할 수 있습니다."
            />
          </label>
        </div>
        <div>
          <label>
            이메일
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            나이
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min={18}
              max={120}
            />
          </label>
        </div>
        <div>
          <label>
            생년월일
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
              min="1900-01-01"
              max={new Date().toISOString().split("T")[0]}
            />
          </label>
        </div>
        <div>
          <label>
            전화번호
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              placeholder="010-1234-5678"
            />
          </label>
        </div>
        <div>
          <label>
            웹사이트
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </label>
        </div>
        <div>
          <label>
            선호 색상
            <input
              type="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            평점
            <input
              type="range"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="10"
              step="1"
            />
            <span>{formData.rating}/10</span>
          </label>
        </div>
        {submitStatus === "success" && (
          <div>
            <span>폼을 성공적으로 제출했습니다!</span>
          </div>
        )}
        {submitStatus === "error" && (
          <div>
            <span>입력값을 확인하세요.</span>
          </div>
        )}
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
