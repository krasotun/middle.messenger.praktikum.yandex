import {
  formValidator,
  handleInputValidation,
} from "../../core/form-validator";
import { Button } from "../button/button";
import { InputSign } from "../input-sign/input-sign.";
import { SignUpForm } from "./sign-up-form";
import authController from "../../controllers/auth-controller";

const submitButton = new Button({
  buttonText: "Регистрация",
  className: "sign-form__submit-button",
  buttonType: "submit",
});
const email = new InputSign({
  label: "E-mail",
  labelFor: "email",
  type: "e-mail",
  name: "email",
  id: "email",
  placeholder: "Введите e-mail",
  required: true,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
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
const firstName = new InputSign({
  label: "Имя",
  labelFor: "first_name",
  type: "text",
  name: "first_name",
  id: "first_name",
  placeholder: "Введите имя",
  required: true,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const lastName = new InputSign({
  label: "Фамилия",
  labelFor: "second_name",
  type: "text",
  name: "second_name",
  id: "second_name",
  placeholder: "Введите фамилию",
  required: true,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const phone = new InputSign({
  label: "Телефон",
  labelFor: "phone",
  type: "text",
  name: "phone",
  id: "phone",
  placeholder: "Введите номер телефона",
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
const passwordAgain = new InputSign({
  label: "Пароль еще раз",
  labelFor: "password",
  type: "password",
  name: "password",
  id: "password-again",
  placeholder: "Пароль еще раз",
  required: true,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const submitSignUpForm = (event: SubmitEvent) => {
  event.preventDefault();
  formValidator(event.target as HTMLFormElement);
  const formData = new FormData(event.target as HTMLFormElement);
  const dataForSend = Object.fromEntries(formData.entries());
  authController.signup(dataForSend);
};
export const signUpForm = new SignUpForm({
  formTitle: "Регистрация",
  linkText: "Войти",
  linkHref: "/",
  children: {
    submitButton,
    email,
    login,
    firstName,
    lastName,
    phone,
    password,
    passwordAgain,
  },
  onSubmit: submitSignUpForm,
});
