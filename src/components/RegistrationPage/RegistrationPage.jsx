import { useState } from "react";
import css from "./registration.module.css";
import { CalendarOriginal } from "../common";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "store/registrationSlice"; 
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";

export const RegistrationPage = () => {
  const [calendar, setCalendar] = useState(false);

  const dispatch = useDispatch();
  const checkAuth = () => dispatch(authAction.checkAuth());

  const validate = Yup.object({
    firstName: Yup.string()
      .min(2, "Не меньше двух символов!")
      .required("First name is required"),
    lastName: Yup.string().min(2, "Не меньше двух символов!"),
    email: Yup.string()
      .email("Email некорректный!")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Пароль не меньше 6 символов!")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Пароли должны совпадать!")
      .required("Password is required"),
  });

 const clickHandlerCalendar = () => { setCalendar((prev) => !prev) }

  const handleSubmit = () => {
    checkAuth();
  };

  return (
    <div>
      <div className={css.wrapper}>
        <h1 className={css.title}>Регистрация</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <div className={css.calendar}>
              <button type="button"
                onClick={clickHandlerCalendar}
                className={css.btn__calendar}
              >
                Календарь
              </button>
              {calendar && <CalendarOriginal />}
            </div>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div className={css.block}>
              <button className={css.btn} type="submit">
                Зарегистрироваться
              </button>
              <Link to={"/"} className={css.btn} type="reset">
                Отмена
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
