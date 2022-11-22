import { Button } from "../button/button";
import { InputProfile } from "../input-profile/input-profile";
import { ProfileForm } from "../profile-form/profile-form";
import {
  handleInputValidation,
  formValidator,
} from "../../core/form-validator";
import userController from "../../controllers/user-controller";
const submitButton = new Button({
  buttonText: "Сохранить",
  className: "profile-form__submit-button",
});
const submitEditProfileForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Edit-profile form submitted");
  formValidator(event.target as HTMLFormElement);
  if (formValidator(event.target as HTMLFormElement)) {
    const formData = new FormData(event.target as HTMLFormElement);
    const dataForSend = Object.fromEntries(formData.entries());
    userController.changeUserInfo(dataForSend);
  }
  const formData = new FormData(event.target as HTMLFormElement);
  console.log(
    "Данные из формы редактиования профиля",
    Object.fromEntries(formData.entries())
  );
};
const email = new InputProfile({
  label: "Почта",
  labelFor: "email",
  type: "e-mail",
  name: "email",
  id: "email",
  placeholder: "",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const login = new InputProfile({
  label: "Логин",
  labelFor: "login",
  type: "text",
  name: "login",
  id: "login",
  placeholder: "",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const firstName = new InputProfile({
  label: "Имя",
  labelFor: "first_name",
  type: "text",
  name: "first_name",
  id: "first_name",
  placeholder: "",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});

const lastName = new InputProfile({
  label: "Фамилия",
  labelFor: "second_name",
  type: "text",
  name: "second_name",
  id: "second_name",
  placeholder: "",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const displayName = new InputProfile({
  label: "Имя в чате",
  labelFor: "display_name",
  type: "text",
  name: "display_name",
  id: "display_name",
  placeholder: "",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const phone = new InputProfile({
  label: "Телефон",
  labelFor: "phone",
  type: "text",
  name: "phone",
  id: "phone",
  placeholder: "",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
export const editProfileForm = new ProfileForm({
  children: {
    submitButton,
    displayName,
    email,
    firstName,
    lastName,
    login,
    phone,
  },
  onSubmit: submitEditProfileForm,
});
