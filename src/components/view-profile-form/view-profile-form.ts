import { InputProfile } from "../input-profile/input-profile";
import { ProfileForm } from "../profile-form/profile-form";
import { handleInputValidation } from "../../core/form-validator";
import { Button } from "../button/button";
const submitButton = new Button({
  buttonText: "",
  className: "button_hidden",
});
const submitViewProfileForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("View-profile form submitted");
  const formData = new FormData(event.target as HTMLFormElement);
  console.log(
    "данные из формы редактиования профиля",
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
  disabled: true,
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
  disabled: true,
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
  disabled: true,
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
  disabled: true,
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
  disabled: true,
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
  disabled: true,
  onBlur: handleInputValidation,
  onFocus: handleInputValidation,
});
export const viewProfileForm = new ProfileForm({
  children: {
    displayName,
    email,
    firstName,
    lastName,
    login,
    phone,
    submitButton,
  },
  onSubmit: submitViewProfileForm,
});
