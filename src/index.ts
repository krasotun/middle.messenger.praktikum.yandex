import { Button } from "./components/button/button";
import { Header } from "./components/header/header";
import { SignForn } from "./components/sign-form/sign-form";
import { renderTemplateToDoM } from "./core/render-template";
const root: HTMLElement | null = document.getElementById("root");
// const header = new Header({ title: "Текст заголовка" });

const signInForm = new SignForn({
  formTitle: "Вход",
  linkText: "Нет аккаунта?",
  inputList: [
    {
      label: "Логин",
      labelFor: "login",
      type: "text",
      name: "login",
      id: "login",
      placeholder: "Введите логин",
      required: true,
    },
    {
      label: "Пароль",
      labelFor: "password",
      type: "password",
      name: "password",
      id: "password",
      placeholder: "Введите пароль",
      required: true,
    },
  ],
});

// renderTemplateToDoM(signInForm, root as HTMLElement);
renderTemplateToDoM(signInForm, root as HTMLElement);
// setTimeout(() => {
//   header.setProps({
//     title: "Новый текст заголовка",
//   });
// }, 3000);
