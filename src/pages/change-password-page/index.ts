import { Header } from "../../components/header/header";
import { changePasswordProfileForm } from "../../components/change-password-profile-form/change-password-profile-form";
import { ChangePasswordPage } from "./change-password-page";

const header = new Header();
export const changePasswordPage = new ChangePasswordPage({
  children: {
    changePasswordProfileForm,
    header,
  },
});
