import { Button } from "../button/button";
import { InputProfile } from "../input-profile/input-profile";
import { ProfileForm } from "../profile-form/profile-form";
import {
  handleInputValidation,
  formValidator,
} from "../../core/form-validator";
const submitButton = new Button({
  buttonText: "Сохранить",
  className: "profile-form__submit-button",
});
const submitEditProfileForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("Edit-profile form submitted");
  formValidator(event.target as HTMLFormElement);
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
  placeholder: "marat@marat.ru",
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
  placeholder: "krasotun",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const firstName = new InputProfile({
  label: "Имя",
  labelFor: "first-name",
  type: "text",
  name: "first-name",
  id: "first-name",
  placeholder: "Marat",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});

const lastName = new InputProfile({
  label: "Фамилия",
  labelFor: "second-name",
  type: "text",
  name: "second-name",
  id: "second-name",
  placeholder: "Ibragimov",
  required: true,
  disabled: false,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
const displayName = new InputProfile({
  label: "Имя в чате",
  labelFor: "display-name",
  type: "text",
  name: "display-name",
  id: "display-name",
  placeholder: "krasotun",
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
  placeholder: "+7(999)999-99-99",
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
