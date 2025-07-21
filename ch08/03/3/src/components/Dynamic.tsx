import useInputEx from "../hooks/useInputEx";

export default function Dynamic() {
  // useInputEx 훅을 사용해 텍스트 필드와 유효성 검사 로직 분리
  const {
    // 이름 입력 필드: 공백을 허용하지 않음
    value: name,
    error: nameError,
    onChange: handleNameChange,
    validate: validateName,
  } = useInputEx<string>({
    initialValue: "",
    validateFn: (value) => {
      if (!value) return "이름은 필수입니다.";
      return undefined;
    },
  });
  const {
    // 이메일 입력 필드: @ 포함 여부 확인
    value: email,
    error: emailError,
    onChange: handleEmailChange,
    validate: validateEmail,
  } = useInputEx<string>({
    initialValue: "",
    validateFn: (value) => {
      if (!value.includes("@")) return "올바른 이메일을 입력하세요.";
      return undefined;
    },
  });
  const {
    // 전화번호 입력 필드: 11자리 숫자만 허용
    value: phone,
    error: phoneError,
    onChange: handlePhoneChange,
    validate: validatePhone,
  } = useInputEx<string>({
    initialValue: "",
    validateFn: (value) => {
      if (!value.match(/^\d{11}$/)) return "전화번호는 11자리여야 합니다.";
      return undefined;
    },
  });
  const {
    // 체크박스 필드: 약관 동의 여부
    value: isAgreed,
    error: isAgreedError,
    onChange: handleAgreeChange,
    validate: validateAgree,
  } = useInputEx<boolean>({
    initialValue: false,
    validateFn: (value) => {
      if (!value) return "약관에 동의해야 합니다.";
      return undefined;
    },
    type: "checkbox",
  });
  const {
    // 라디오 버튼 필드: 성별 선택
    value: gender,
    error: genderError,
    onChange: handleGenderChange,
    validate: validateGender,
  } = useInputEx<string>({
    initialValue: "male",
    validateFn: (value) => {
      if (!value) return "성별을 선택하세요.";
      return "";
    },
    type: "radio",
  });
  const handleSubmit = (e: React.FormEvent) => {
    // 폼 제출 시 전체 필드 유효성 검사
    e.preventDefault();
    if (
      validateName() &&
      validateEmail() &&
      validatePhone() &&
      validateAgree() &&
      validateGender()
    ) {
      console.log("폼 제출:", { name, email, phone, isAgreed, gender });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름: </label>
        <input type="text" value={name} onChange={handleNameChange} />
        {nameError && <p>{nameError}</p>}
      </div>
      <div>
        <label>이메일: </label>
        <input type="email" value={email} onChange={handleEmailChange} />
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label>전화번호: </label>
        <input type="text" value={phone} onChange={handlePhoneChange} />
        {phoneError && <p>{phoneError}</p>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleAgreeChange}
          />
          동의합니다
        </label>
        {isAgreedError && <p>{isAgreedError}</p>}
      </div>
      <div>
        <label>성별:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={handleGenderChange}
          />
          남성
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
          />
          여성
        </label>
        {genderError && <p>{genderError}</p>}
      </div>
      <button type="submit">제출</button>
    </form>
  );
}
