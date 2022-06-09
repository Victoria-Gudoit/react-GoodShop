import React from "react";
import { ErrorMessage, useField } from "formik";
import css from "./registration.module.css";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input className={css.input} {...field} {...props} />
      <ErrorMessage name={field.name} />
    </div>
  );
};
