import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import "./loginForm.scss";
type IFormInputModel = {
  input: any;
  meta: any;
  children: any;
  hasFeedback: any;
  label: any;
  name: any;
  type: any;
  placeholder: any;
  rules: any;
  Component?: any;
}

const required = (value: string | undefined) => (value ? undefined : "Required");
const email = (value: string | undefined) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const validate = [required];
const validateEmail = [required, email]
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}: IFormInputModel) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const SignupForm = (props: InjectedFormProps) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="Firstname"
          validate={validate}
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Lastname"
          validate={validate}
        />
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
          validate={validate}
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          validate={validateEmail}
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          validate={validate}
        />
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "signupForm", // a unique identifier for this form
})(SignupForm);
