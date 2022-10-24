import { Button } from "../button/button";
import { ProfileForm } from "../profile-form/profile-form";

const submitButton = new Button({
  buttonText: "Сохранить",
  className: "profile-form__submit-button",
});

export const changePasswordProfileForm = new ProfileForm({
  inputList: [
    {
      label: "Старый пароль",
      labelFor: "oldPassword",
      type: "password",
      name: "oldPassword",
      id: "oldPassword",
      placeholder: "********",
      required: true,
      disabled: false,
    },
    {
      label: "Новый пароль",
      labelFor: "newPassword",
      type: "password",
      name: "newPassword",
      id: "newPassword",
      placeholder: "********",
      required: true,
      disabled: false,
    },
    {
      label: "Подтвердите новый пароль",
      labelFor: "confirmNewPassword",
      type: "password",
      name: "confirmNewPassword",
      id: "confirmNewPassword",
      placeholder: "********",
      required: true,
      disabled: false,
    },
  ],
  children: {
    submitButton,
  },
});
