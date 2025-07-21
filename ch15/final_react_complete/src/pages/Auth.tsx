import { useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

export default function Auth() {
  const [pageType, setPageType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const handlePageChange = (type: string) => {
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setUsername("");
    setPageType(type);
  };
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/login", {
        email,
        password,
      });
      setAuth(data.user, data.accessToken);
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message ?? error.message;
        alert(msg);
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 이유로 실패했습니다.");
      }
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (email === "" || password === "" || username === "") {
        alert("모든 항목을 입력해 주세요.");
        return;
      }
      if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      const { data } = await axiosInstance.post("/register", {
        email,
        password,
        username,
      });
      if (data) {
        alert("회원가입을 완료했습니다.\n로그인 후 이용해 주세요.");
        setPassword("");
        setPasswordConfirm("");
        setUsername("");
        setPageType("login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message ?? error.message;
        alert(msg);
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 이유로 실패했습니다.");
      }
    }
  };

  return (
    <main className="page__main">
      <article className="page-auth">
        <section className="page-auth__container">
          <nav className="page-auth__toggle">
            <button
              id="login-tab"
              className={`page-auth__toggle-button ${
                pageType === "login" && "page-auth__toggle-button--active"
              }`}
              onClick={() => handlePageChange("login")}
            >
              로그인
            </button>
            <button
              id="signup-tab"
              className={`page-auth__toggle-button ${
                pageType === "register" && "page-auth__toggle-button--active"
              }`}
              onClick={() => handlePageChange("register")}
            >
              회원가입
            </button>
          </nav>

          <div className="page-auth__form-section">
            <form
              className={`auth-form ${
                pageType === "login" && "auth-form--active"
              }`}
              id="login-form"
              onSubmit={handleLogin}
            >
              <label htmlFor="login-email" className="a11y-hidden">
                이메일
              </label>
              <input
                type="email"
                id="login-email"
                className="auth-form__input"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="login-password" className="a11y-hidden">
                비밀번호
              </label>
              <input
                type="password"
                id="login-password"
                className="auth-form__input"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="auth-form__submit">
                로그인
              </button>
            </form>

            <form
              className={`auth-form ${
                pageType === "register" && "auth-form--active"
              }`}
              id="signup-form"
              onSubmit={handleSignup}
            >
              <label htmlFor="signup-email" className="a11y-hidden">
                이메일
              </label>
              <input
                type="email"
                id="signup-email"
                className="auth-form__input"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="signup-name" className="a11y-hidden">
                이름
              </label>
              <input
                type="text"
                id="signup-name"
                className="auth-form__input"
                placeholder="이름"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="signup-password" className="a11y-hidden">
                비밀번호
              </label>
              <input
                type="password"
                id="signup-password"
                className="auth-form__input"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label htmlFor="signup-confirm-password" className="a11y-hidden">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="signup-confirm-password"
                className="auth-form__input"
                placeholder="비밀번호 확인"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />

              <button type="submit" className="auth-form__submit">
                회원가입
              </button>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
