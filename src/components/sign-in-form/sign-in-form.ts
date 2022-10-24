import { Button } from "../button/button";
import { SignForm } from "../sign-form/sign-form";

const submitButton = new Button({
  buttonText: "Войти",
  className: "sign-form__submit-button",
});
export const signInForm = new SignForm({
  formTitle: "Вход",
  linkText: "Нет аккаунта?",
  linkHref: "/sign-up",
  inputList: [
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
      label: "Пароль",
      labelFor: "password",
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Введите пароль",
      required: true,
    },
  ],
  children: {
    submitButton,
  },
});
