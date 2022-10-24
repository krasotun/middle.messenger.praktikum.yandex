import { Header } from "../../components/header/header";
import { ProfileForm } from "../../components/profile-form/profile-form";

export interface IProfilePageProps {
  children: {
    viewProfileForm: ProfileForm;
    header: Header;
  };
}
