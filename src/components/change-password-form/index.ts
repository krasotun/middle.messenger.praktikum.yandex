import userController from "../../controllers/user-controller";
import { handleInputValidation } from "../../core/form-validator";
import { IUserPassword } from "../../interfaces/user-password";
import { Button } from "../button/button";
import { InputProfile } from "../input-profile/input-profile";
import { ChangePasswordForm } from "./change-password-form";

const submitChangePasswordForm = (event: SubmitEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const dataForSend: IUserPassword = Object.fromEntries(formData.entries());
  userController.changeUserPassword(dataForSend);
};
export const changePasswordForm = new ChangePasswordForm({
  children: {
    password: new InputProfile({
      label: "Старый пароль",
      labelFor: "password",
      type: "password",
      name: "oldPassword",
      id: "oldPassword",
      placeholder: "",
      required: true,
      disabled: false,
      onBlur: handleInputValidation,
      onFocus: handleInputValidation,
    }),
    againPassword: new InputProfile({
      label: "Подтвердите новый пароль",
      labelFor: "password-again",
      type: "password",
      name: "password-again",
      id: "password-again",
      placeholder: "",
      required: true,
      disabled: false,
      onBlur: handleInputValidation,
      onFocus: handleInputValidation,
    }),
    newPassword: new InputProfile({
      label: "Новый пароль",
      labelFor: "newPassword",
      type: "password",
      name: "newPassword",
      id: "newPassword",
      placeholder: "",
      required: true,
      disabled: false,
      onBlur: handleInputValidation,
      onFocus: handleInputValidation,
    }),
    submitButton: new Button({
      buttonText: "Сохранить",
      className: "profile-form__submit-button",
    }),
  },
  onSubmit: submitChangePasswordForm,
});
