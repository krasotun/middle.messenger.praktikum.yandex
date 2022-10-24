import { Header } from "../../components/header/header";
import { SignForm } from "../../components/sign-form/sign-form";
export interface ISignUpPageProps {
  children: {
    signUpForm: SignForm;
    header: Header;
  };
}
