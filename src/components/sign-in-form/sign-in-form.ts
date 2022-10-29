import { Button } from "../button/button";
import { InputSign } from "../input-sign/input-sign.";
import { SignForm } from "../sign-form/sign-form";
import { handleInputValidation } from "../../core/form-validator";
const submitButton = new Button({
  buttonText: "Войти",
  className: "sign-form__submit-button",
  buttonType: "submit",
});
const login = new InputSign({
  label: "Логин",
  labelFor: "login",
  type: "text",
  name: "login",
  id: "login",
  placeholder: "Введите логин",
  required: true,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const password = new InputSign({
  label: "Пароль",
  labelFor: "password",
  type: "password",
  name: "password",
  id: "password",
  placeholder: "Введите пароль",
  required: true,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});

export const signInForm = new SignForm({
  formTitle: "Вход",
  linkText: "Нет аккаунта?",
  linkHref: "/sign-up",
  children: {
    submitButton,
    login,
    password,
  },
});
