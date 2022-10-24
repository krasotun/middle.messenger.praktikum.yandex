import { Button } from "../button/button";
import { SignForm } from "../sign-form/sign-form";

const submitButton = new Button({
  buttonText: "Регистрация",
  className: "sign-form__submit-button",
});
export const signUpForm = new SignForm({
  formTitle: "Регистрация",
  linkText: "Войти",
  linkHref: "/",
  inputList: [
    {
      label: "E-mail",
      labelFor: "email",
      type: "e-mail",
      name: "email",
      id: "email",
      placeholder: "Введите e-mail",
      required: true,
    },
    {
      label: "Логин",
      labelFor: "login",
      type: "text",
      name: "login",
      id: "login",
      placeholder: "Введите логин",
      required: true,
    },
    {
      label: "Имя",
      labelFor: "first-name",
      type: "text",
      name: "first-name",
      id: "first-name",
      placeholder: "Введите имя",
      required: true,
    },
    {
      label: "Фамилия",
      labelFor: "second_name",
      type: "text",
      name: "second_name",
      id: "second_name",
      placeholder: "Введите фамилию",
      required: true,
    },
    {
      label: "Телефон",
      labelFor: "phone",
      type: "text",
      name: "phone",
      id: "phone",
      placeholder: "Введите номер телефона",
      required: true,
    },
    {
      label: "Пароль",
      labelFor: "password",
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Введите пароль",
      required: true,
    },
    {
      label: "Пароль еще раз",
      labelFor: "password",
      type: "password",
      name: "password",
      id: "password-again",
      placeholder: "Пароль еще раз",
      required: true,
    },
  ],
  children: {
    submitButton,
  },
});
