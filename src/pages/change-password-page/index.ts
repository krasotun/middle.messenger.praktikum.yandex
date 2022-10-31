import { Header } from "../../components/header/header";
import { ChangePasswordPage } from "./change-password-page";
import { changePasswordForm } from "../../components/change-password-form/";
const header = new Header();

export const changePasswordPage = new ChangePasswordPage({
  children: {
    header,
    changePasswordForm,
  },
});
