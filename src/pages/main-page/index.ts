import { Header } from "../../components/header/header";
import { signInForm } from "../../components/sign-in-form/";
import { MainPage } from "./main-page";
const header = new Header();
export const mainPage = new MainPage({
  children: {
    header,
    signInForm,
  },
});
