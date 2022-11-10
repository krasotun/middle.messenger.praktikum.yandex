import { Button } from "../button/button";
import { InputSign } from "../input-sign/input-sign.";
import {
  handleInputValidation,
  formValidator,
} from "../../core/form-validator";
import { SignInForm } from "./sign-in-form";
import authController from "../../controllers/auth-controller";
import { ISigninIn } from "../../interfaces/sign-in";
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
const submitSignInForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Sign-in form submitted");
  formValidator(event.target as HTMLFormElement);
  const formData = new FormData(event.target as HTMLFormElement);
  const dataForSend = Object.fromEntries(formData.entries());
  authController.signin(dataForSend);
};
export const signInForm = new SignInForm({
  formTitle: "Вход",
  linkText: "Нет аккаунта?",
  linkHref: "/sign-up",
  children: {
    submitButton,
    login,
    password,
  },
  onSubmit: submitSignInForm,
});
