import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/actions";
import { useDispatch } from "react-redux";

const schema = yup.object({
  name: yup.string().min(3).max(50).required(),
  number: yup.string().min(3).max(50).required(),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      }),
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      <Form className={css.handleForm}>
        <div className={css.field}>
          <label htmlFor={nameId}>Name</label>
          <Field id={nameId} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.field}>
          <label htmlFor={numberId}>Number</label>
          <Field id={numberId} name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
