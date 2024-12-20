import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { nanoid } from "nanoid";

const initialValues = {
  email: "",
  password: "",
};
export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form>
        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />
        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="password" name="password" id={passwordFieldId} />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
