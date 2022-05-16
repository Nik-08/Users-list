import classNames from "classnames";
import { Field, FieldConfig, Formik } from "formik";
import { FC, HTMLAttributes, memo, useState } from "react";
import * as yup from "yup";

import css from "./styles.module.scss";

interface Props
  extends FieldConfig,
    Omit<HTMLAttributes<HTMLInputElement>, "children"> {
  label: string;
  error?: string;
  disabled?: boolean;
}

export const Input: FC<Props> = memo(({ name, label, error, ...rest }) => {
  return (
    <>
      <label htmlFor={name} className={css.form__label}>
        {label}
      </label>
      <Field
        id={name}
        className={classNames(css.form__input, {
          [css.notValid]: Boolean(error),
        })}
        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => getValue(e)}
        {...rest}
      />
      {error && <span className={css.error}>{error}</span>}
    </>
  );
});
