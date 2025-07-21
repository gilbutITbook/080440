import Input from "./components/Input";

export default function App() {
  return (
    <>
      <Input type="email" placeholder="Enter Your Email">
        이메일
      </Input>
      <Input type="password" placeholder="Enter Your Password">
        비밀번호
      </Input>
    </>
  );
}
