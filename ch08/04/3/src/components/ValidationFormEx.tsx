import { Field, Form, Formik } from "formik";

export default function ValidationFormEx() {
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
      >
        <Form>
          <Field name="email" type="email" component="input" />
          <Field name="password" type="password" component="input" />
          <button type="submit">로그인</button>
        </Form>
      </Formik>
    </>
  );
}
