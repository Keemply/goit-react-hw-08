import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "To Short!")
    .max(50, "Too Long!")
    .required("Required"),
  userNumber: Yup.string()
    .min(3, "To Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const initialValues = {
  username: "",
  userNumber: "",
};
function ContactForm() {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.username,
        number: values.userNumber,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.formCont}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field
          type="text"
          name="username"
          id={nameFieldId}
          className={css.field}
        />
        <ErrorMessage
          name="username"
          component="span"
          className={css.errorMessage}
        />
        <label htmlFor={numberFieldId} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          name="userNumber"
          id={numberFieldId}
          className={css.field}
        />
        <ErrorMessage
          name="userNumber"
          component="span"
          className={css.errorMessage}
        />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
export default ContactForm;
