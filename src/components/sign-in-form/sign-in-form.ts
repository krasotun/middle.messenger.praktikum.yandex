import { Button } from "../button/button";
import { SignForn } from "../sign-form/sign-form";

export const signInForm = new SignForn({
  formTitle: "Вход",
  linkText: "Нет аккаунта?",
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
  submitButton: new Button({
    buttonText: "Войти",
    className: "sign-form__submit-button",
  }),
});
