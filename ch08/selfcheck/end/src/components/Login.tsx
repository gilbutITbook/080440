import { useRef, useState } from "react";

export default function Login() {
  // 이메일 입력값을 저장할 상태
  const [email, setEmail] = useState("");
  // 이메일 입력 요소를 가리킬 ref 객체
  const emailRef = useRef<HTMLInputElement>(null);

  // 비밀번호 입력값을 저장할 상태
  const [password, setPassword] = useState("");
  // 비밀번호 입력 요소를 가리킬 ref 객체
  const passwordRef = useRef<HTMLInputElement>(null);

  // 약관 동의 여부를 저장할 상태
  const [isChecked, setIsChecked] = useState(false);

  // 폼 제출 이벤트 처리 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      alert("이메일을 입력해주세요.");
      emailRef.current?.focus();
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      passwordRef.current?.focus();
      return;
    }
    if (!isChecked) {
      alert("약관에 동의해주세요.");
      return;
    }
    alert("로그인을 성공했습니다.");
  };
  return (
    <>
      <div className="item-middle ">
        <div className="w-[375px]  rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]">
          <h1 className="text-xl font-bold mb-[10px]">Login Into App</h1>
          <p className="text-sm mb-5">Please enter your details to continue.</p>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              ref={emailRef}
              type="email"
              className="input-style1"
              placeholder="someone@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              ref={passwordRef}
              type="password"
              className="input-style1"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="chk"
                className="w-5 h-5 appearance-none border border-[#4f4f4f] bg-white checked:bg-[#4f4f4f] rounded-[5px] checked:bg-[url('./check-icon.svg')] checked:bg-no-repeat checked:bg-center"
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="chk">
                <span className="text-sm color-[#4f4f4f]">
                  I agree with <em className="not-italic font-bold">terms</em>{" "}
                  and <em className="not-italic font-bold">policies</em>.
                </span>
              </label>
            </div>
            <div className="mt-4 grid gap-4">
              <button
                type="submit"
                className="h-[44px] text-sm w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg disabled:bg-[#BDBDBD] disabled:cursor-not-allowed"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
