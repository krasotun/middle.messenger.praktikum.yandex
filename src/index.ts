import { Header } from "./components/header/header";
import { signInForm } from "./components/sign-in-form/sign-in-form";
import { renderTemplateToDoM } from "./core/render-template";
import { MainPage } from "./pages/main-page/main-page";
const root: HTMLElement | null = document.getElementById("root");
const header = new Header();
const mainPage = new MainPage({
  children: {
    header,
    signInForm,
  },
});
renderTemplateToDoM(mainPage, root as HTMLElement);
