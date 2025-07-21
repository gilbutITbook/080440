import { useState } from "react";

type InputType = "text" | "checkbox" | "radio";
// useInput 훅에 전달한 props의 타입 정의
interface UseInputProps<T> {
  initialValue: T; // 초깃값
  validateFn: (value: T) => string | undefined; // 유효성 검사 함수
  type?: InputType; // 입력 필드 타입(기본값 'text')
}

export default function useInputEx<T>({
  initialValue,
  validateFn,
  type = "text",
}: UseInputProps<T>) {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === "checkbox"
        ? (e.target.checked as unknown as T)
        : (e.target.value as T);
    setValue(newValue);
    setError("");
  };
  const validate = (): boolean => {
    const validationError = validateFn(value);
    setError(validationError || "");
    return !validationError;
  };
  const reset = () => {
    setValue(initialValue);
    setError("");
  };
  return {
    value, // 현재 입력 값
    error, // 유효성 검사 오류 메시지
    onChange, // 입력 이벤트 핸들러
    validate, // 유효성 검사 함수
    reset, // 상태 초기화 함수
  };
}
