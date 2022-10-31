import { Header } from "../../components/header/header";
import { SignUpForm } from "../../components/sign-up-form/sign-up-form";
export interface ISignUpPageProps {
  children: {
    signUpForm: SignUpForm;
    header: Header;
  };
}
