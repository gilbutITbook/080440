import { ErrorMessage, Field, Form, Formik } from "formik";
interface ErrorValues {
  email?: string;
  password?: string;
}
export default function ValidationFormEx2() {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(values) => {
          const errors: ErrorValues = {};
          if (!values.email) {
            errors.email = "필수 입력 항목입니다.";
          } else if (!values.email.includes("@")) {
            errors.email = "올바르지 않은 이메일 형식입니다.";
          }
          if (!values.password) {
            errors.password = "필수 입력 항목입니다.";
          } else if (values.password.length < 4) {
            errors.password =
              "비밀번호는 대소문자, 특수문자를 포함해 4자 이상이어야 합니다.";
          }
          return Object.keys(errors).length > 0 ? errors : {};
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="email"
              type="email"
              placeholder="이메일을 입력하세요"
              component="input"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
              component="input"
            />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "로그인중..." : "로그인"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
