import { useState } from "react";

export default function ValidationFormCustom() {
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
  const [formErrors, setFormErrors] = useState({
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
  const validateUsername = (username: string) => {
    // 커스텀 밸리데이션 함수
    if (!username) return "사용자 이름은 필수입니다.";
    if (username.length < 3 || username.length > 20)
      return "사용자 이름은 3~20자 사이여야 합니다.";
    if (!/^[A-Za-z0-9]+$/.test(username))
      return "사용자 이름은 영문자와 숫자만 포함해야 합니다.";
    return "";
  };
  const validateEmail = (email: string) => {
    if (!email) return "이메일은 필수입니다.";
    if (!/\S+@\S+\.\S+/.test(email)) return "유효한 이메일 주소를 입력하세요.";
    return "";
  };
  const validateAge = (age: string) => {
    if (!age) return "나이는 필수입니다.";
    if (Number(age) < 18 || Number(age) > 120)
      return "나이는 18~120 사이여야 합니다.";
    return "";
  };
  const validateBirthdate = (birthdate: string) => {
    if (!birthdate) return "생년월일은 필수입니다.";
    const date = new Date(birthdate);
    if (isNaN(date.getTime())) return "유효한 날짜를 선택하세요.";
    return "";
  };
  const validatePhone = (phone: string) => {
    if (!phone) return "전화번호는 필수입니다.";
    if (!/^\d{3}-\d{4}-\d{4}$/.test(phone))
      return "전화번호는 010-1234-5678 형식이어야 합니다.";
    return "";
  };
  const validateWebsite = (website: string) => {
    if (!website) return "웹사이트는 필수입니다.";
    try {
      new URL(website);
      return "";
    } catch {
      return "유효한 URL을 입력하세요.";
    }
  };
  const validateColor = (color: string) => {
    if (!/^#[0-9A-Fa-f]{6}$/.test(color)) return "유효한 색상 값을 선택하세요.";
    return "";
  };
  const validateRating = (rating: string) => {
    const num = Number(rating);
    if (isNaN(num)) return "평점은 숫자여야 합니다.";
    if (num < 0 || num > 10) return "평점은 0~10 사이여야 합니다.";
    return "";
  };
  const validateForm = () => {
    // 각 필드에 대해 커스텀 밸리데이션 함수 실행: 오류 메시지 저장
    const errors = {
      username: validateUsername(formData.username),
      email: validateEmail(formData.email),
      age: validateAge(formData.age),
      birthdate: validateBirthdate(formData.birthdate),
      phone: validatePhone(formData.phone),
      website: validateWebsite(formData.website),
      color: validateColor(formData.color),
      rating: validateRating(formData.rating),
    };

    // 화면에 표시하기 위해 오류 메시지를 상태에 반영
    setFormErrors(errors);

    // 하나라도 오류 메시지가 있으면 isValid를 false로 설정
    return !Object.values(errors).some((msg) => msg !== "");
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
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
            />
          </label>
          {formErrors.username && <div>{formErrors.username}</div>}
        </div>
        <div>
          <label>
            이메일
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {formErrors.email && <div>{formErrors.email}</div>}
        </div>
        <div>
          <label>
            나이
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          {formErrors.age && <div>{formErrors.age}</div>}
        </div>
        <div>
          <label>
            생년월일
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
            />
          </label>
          {formErrors.age && <div>{formErrors.birthdate}</div>}
        </div>
        <div>
          <label>
            전화번호
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          {formErrors.phone && <div>{formErrors.phone}</div>}
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
          {formErrors.phone && <div>{formErrors.website}</div>}
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
          {formErrors.color && <div>{formErrors.color}</div>}
        </div>
        <div>
          <label>
            평점
            <input
              type="range"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
            <span>{formData.rating}/10</span>
          </label>
          {formErrors.rating && <div>{formErrors.rating}</div>}
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
