import { Header } from "../../components/header/header";
import { ProfilePage } from "./profile-page";
import { viewProfileForm } from "../../components/view-profile-form/view-profile-form";

const header = new Header();
export const profilePage = new ProfilePage({
  children: {
    header,
    viewProfileForm,
  },
});
