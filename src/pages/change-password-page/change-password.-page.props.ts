import { ChangePasswordForm } from "../../components/change-password-form/change-password-form";
import { Header } from "../../components/header/header";

export interface IChangePasswordProps {
  children: {
    header: Header;
    changePasswordForm: ChangePasswordForm;
  };
}
