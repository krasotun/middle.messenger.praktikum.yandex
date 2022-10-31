import {
  formValidator,
  handleInputValidation,
} from "../../core/form-validator";
import { Button } from "../button/button";
import { InputProfile } from "../input-profile/input-profile";
import { ChangePasswordForm } from "./change-password-form";

const submitButton = new Button({
  buttonText: "Сохранить",
  className: "profile-form__submit-button",
});

const submitChangePasswordForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Change password  form submitted");
  formValidator(event.target as HTMLFormElement);
  const formData = new FormData(event.target as HTMLFormElement);
  console.log(
    "Данные из формы смены пароля",
    Object.fromEntries(formData.entries())
  );
};
export const password = new InputProfile({
  label: "Старый пароль",
  labelFor: "password",
  type: "password",
  name: "password",
  id: "password",
  placeholder: "********",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const newPassword = new InputProfile({
  label: "Новый пароль",
  labelFor: "password-new",
  type: "password",
  name: "password-new",
  id: "password-new",
  placeholder: "********",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const againPassword = new InputProfile({
  label: "Подтвердите новый пароль",
  labelFor: "password-again",
  type: "password",
  name: "password-again",
  id: "password-again",
  placeholder: "********",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});

export const changePasswordForm = new ChangePasswordForm({
  children: {
    password,
    againPassword,
    newPassword,
    submitButton,
  },
  onSubmit: submitChangePasswordForm,
});
