import { SignForn } from "./components/sign-form/sign-form";
import { signInForm } from "./components/sign-in-form/sign-in-form";
import { renderTemplateToDoM } from "./core/render-template";
const root: HTMLElement | null = document.getElementById("root");
renderTemplateToDoM(signInForm, root as HTMLElement);

// renderTemplateToDoM(signInForm, root as HTMLElement);
// renderTemplateToDoM(signInForm, root as HTMLElement);
// setTimeout(() => {
//   header.setProps({
//     title: "Новый текст заголовка",
//   });
// }, 3000);
console.log(signInForm);
