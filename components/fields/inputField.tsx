import React from "react";
import { FieldProps } from "formik";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps & InputProps) => {
  const errorMsg = touched[field.name] && errors[field.name];
  return (
    <div>
      <input {...field} {...props} />
      {errorMsg && <div style={{ color: "red" }}>{errorMsg}</div>}
    </div>
  );
};
