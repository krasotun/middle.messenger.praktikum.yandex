import { Header } from "../../components/header/header";
import { ProfileForm } from "../../components/profile-form/profile-form";

export interface IEditProfileProps {
  children: {
    header: Header;
    editProfileForm: ProfileForm;
  };
}
