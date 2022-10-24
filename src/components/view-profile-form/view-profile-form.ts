import { ProfileForm } from "../profile-form/profile-form";

export const viewProfileForm = new ProfileForm({
  inputList: [
    {
      label: "Почта",
      labelFor: "email",
      type: "e-mail",
      name: "email",
      id: "email",
      placeholder: "marat@marat.ru",
      required: true,
      disabled: true,
    },
    {
      label: "Логин",
      labelFor: "login",
      type: "text",
      name: "login",
      id: "login",
      placeholder: "krasotun",
      required: true,
      disabled: true,
    },
    {
      label: "Имя",
      labelFor: "first_name",
      type: "text",
      name: "first_name",
      id: "first_name",
      placeholder: "Marat",
      required: true,
      disabled: true,
    },
    {
      label: "Фамилия",
      labelFor: "second_name",
      type: "text",
      name: "second_name",
      id: "second_name",
      placeholder: "Ibragimov",
      required: true,
      disabled: true,
    },
    {
      label: "Имя в чате",
      labelFor: "display_name",
      type: "text",
      name: "display_name",
      id: "display_name",
      placeholder: "krasotun",
      required: true,
      disabled: true,
    },
    {
      label: "Телефон",
      labelFor: "phone",
      type: "text",
      name: "phone",
      id: "phone",
      placeholder: "+7(999)999-99-99",
      required: true,
      disabled: true,
    },
  ],
  linkList: [
    {
      link: "edit-profile.pug",
      text: "Изменить данные",
    },
    {
      link: "change-password.pug",
      text: "Изменить пароль",
    },
    {
      link: "chat.pug",
      text: "Вернуться в чат",
    },
    {
      link: "index.pug",
      text: "Выход",
    },
  ],
});
