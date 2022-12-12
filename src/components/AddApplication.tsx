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

const AddApplication = (props: InjectedFormProps) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <Field
          name="id"
          type="text"
          component={renderField}
          label="Id"
          validate={validate}
        />
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Name"
          validate={validate}
        />
        <Field
          name="secret"
          type="text"
          component={renderField}
          label="Secret"
          validate={validate}
        />
        <Field
          name="lang"
          type="text"
          component={renderField}
          label="Language"
          validate={validate}
        />
        <Field
          name="version"
          type="text"
          component={renderField}
          label="Version"
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
  form: "addAppForm", // a unique identifier for this form
})(AddApplication);
