import { Header } from "../../components/header/header";
import { SignForm } from "../../components/sign-form/sign-form";

export interface IMainPageProps {
  children: {
    header: Header;
    signInForm: SignForm;
  };
}
