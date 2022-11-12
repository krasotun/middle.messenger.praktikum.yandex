import { InputProfile } from "../input-profile/input-profile";
import { ProfileForm } from "../profile-form/profile-form";
import { handleInputValidation } from "../../core/form-validator";
import { Button } from "../button/button";
import { signInForm } from "../sign-in-form";
const submitViewProfileForm = (event: SubmitEvent) => {
  event.preventDefault();
  console.log("View-profile form submitted");
};
export const viewProfileForm = new ProfileForm({
  children: {
    displayName: new InputProfile({
      label: "Имя в чате",
      labelFor: "display_name",
      type: "text",
      name: "display_name",
      id: "display_name",
      placeholder: "krasotun",
      required: true,
      disabled: true,
      onBlur: handleInputValidation,
      onFocus: handleInputValidation,
    }),
    email: new InputProfile({
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
    }),
    firstName: new InputProfile({
      label: "Имя",
      labelFor: "first_name",
      type: "text",
      name: "first_name",
      id: "first_name",
      placeholder: "Marat",
      required: true,
      disabled: true,
      onBlur: handleInputValidation,
      onFocus: handleInputValidation,
    }),
    lastName: new InputProfile({
      label: "Фамилия",
      labelFor: "second_name",
      type: "text",
      name: "second_name",
      id: "second_name",
      placeholder: "Ibragimov",
      required: true,
      disabled: true,
      onBlur: handleInputValidation,
      onFocus: handleInputValidation,
    }),
    login: new InputProfile({
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
    }),
    phone: new InputProfile({
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
    }),
    submitButton: new Button({
      buttonText: "",
      className: "button_hidden",
    }),
  },
  onSubmit: submitViewProfileForm,
});
