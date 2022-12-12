import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
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

const validate = [required];
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
const LoginForm = (props: InjectedFormProps) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
          validate={validate}
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
            Log In
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
        <div>
          <Link to={"/signup"}>Not registered yet? Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "loginForm", // a unique identifier for this form
})(LoginForm);
