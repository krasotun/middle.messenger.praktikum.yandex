import { Header } from "../../components/header/header";
import { SignInForm } from "../../components/sign-in-form/sign-in-form";

export interface IMainPageProps {
  children: {
    header: Header;
    signInForm: SignInForm;
  };
}
