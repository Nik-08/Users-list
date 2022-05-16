import classNames from "classnames";
import { Formik, Form, FormikProps } from "formik";
import { FC, useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

import {
  useGetUsersQuery,
  useUpdatePostMutation,
} from "../../../app/services/users";
import { Input } from "../../../components";
import css from "../styles.module.scss";

interface UserProp extends User {}

interface FormState {
  name: string;
  username: string;
  email: string;
  phone: string;
  address: Address;
  website: string;
  comment: string;
  company: Company;
}

export const UserForm: FC<UserProp> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  const [disabled, setDisabled] = useState(true);

  const initialValues: FormState = {
    name,
    username,
    email,
    phone,
    address,
    website,
    company,
    comment: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    username: yup.string().required("User Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(
        /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
        "Must be a valid phone"
      ),
    address: yup.object().shape({
      street: yup.string().required("Street is required"),
      city: yup.string().required("City is required"),
      zipcode: yup.string().required("Zipcode is required"),
    }),
    website: yup.string().required("Website is required"),
    comment: yup.string(),
  });

  const toggleDisabled = useCallback(() => {
    setDisabled((val) => !val);
  }, [setDisabled]);

  const [updateUsers, { isError }] = useUpdatePostMutation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(formState: FormState) => {
        const newFormState = {
          id,
          ...formState,
        };
        updateUsers(newFormState);
      }}
    >
      {(formikProps: FormikProps<FormState>) => {
        return (
          <Form className={classNames(css.form, css.content__form)}>
            <div className={css.content}>
              <div className={css.content__header}>
                <h3 className={css.content__title}>Профиль пользоваетля</h3>
                <button
                  className={classNames(css.btn, css.content__btn)}
                  onClick={toggleDisabled}
                  type="button"
                >
                  Редактировать
                </button>
              </div>

              <div className={css.form__item}>
                <Input
                  label="Name"
                  placeholder={name}
                  disabled={disabled}
                  value={formikProps.values.name}
                  name={"name"}
                  error={formikProps.errors.name}
                />
              </div>
              <div className={css.form__item}>
                <Input
                  label="User Name"
                  placeholder={username}
                  disabled={disabled}
                  value={formikProps.values.username}
                  name={"username"}
                  error={formikProps.errors.username}
                />
              </div>
              <div className={css.form__item}>
                <Input
                  label="Email"
                  placeholder={email}
                  disabled={disabled}
                  value={formikProps.values.email}
                  name={"email"}
                  error={formikProps.errors.email}
                />
              </div>
              <div className={css.form__item}>
                <Input
                  label="Street"
                  placeholder={address.street}
                  value={formikProps.values.address.street}
                  disabled={disabled}
                  name={"address.street"}
                  error={formikProps.errors.address?.street}
                />
              </div>
              <div className={css.form__item}>
                <Input
                  label="City"
                  placeholder={address.city}
                  value={formikProps.values.address.city}
                  disabled={disabled}
                  name={"address.city"}
                  error={formikProps.errors.address?.city}
                />
              </div>
              <div className={css.form__item}>
                <Input
                  label="Zipcode"
                  placeholder={address.zipcode}
                  value={formikProps.values.address.zipcode}
                  disabled={disabled}
                  name={"address.zipcode"}
                  error={formikProps.errors.address?.zipcode}
                />
              </div>
              <div className={css.form__item}>
                <Input
                  label="Phone"
                  value={formikProps.values.phone}
                  placeholder={phone}
                  disabled={disabled}
                  name={"phone"}
                  error={formikProps.errors.phone}
                />
              </div>
              <div className={css.form__item}>
                <Input
                  label="Website"
                  placeholder={website}
                  value={formikProps.values.website}
                  disabled={disabled}
                  name={"website"}
                  error={formikProps.errors.website}
                />
              </div>
              <div className={css.form__item}>
                <Input
                  label="Comment"
                  className={css.form__input}
                  value={formikProps.values.comment}
                  placeholder=""
                  name={"comment"}
                  component="textarea"
                  error={formikProps.errors.comment}
                />
              </div>

              <div className={css.content__footer}>
                <Link to="/">
                  <button
                    className={classNames(
                      css.content__btn,
                      css.btn,
                      css.content__btn_back,
                      {
                        disabled: disabled,
                      }
                    )}
                  >
                    ← Назад
                  </button>
                </Link>

                <button
                  type="submit"
                  className={classNames(
                    css.content__btn,
                    css.btn,
                    css.content__btn_send,
                    {
                      [css.disabled]: disabled,
                    }
                  )}
                >
                  Отправить
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
