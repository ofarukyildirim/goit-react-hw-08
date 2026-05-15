import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { registerUser } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string().min(7, "Password too short").required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>

        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="span" className={css.error} />
        </label>

        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </label>

        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
