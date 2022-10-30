import { Header } from "../../components/header/header";
import { signUpForm } from "../../components/sign-up-form/";
import { SignUpPage } from "./sign-up-page";
const header = new Header();
export const signUpPage = new SignUpPage({
  children: {
    header,
    signUpForm,
  },
});
