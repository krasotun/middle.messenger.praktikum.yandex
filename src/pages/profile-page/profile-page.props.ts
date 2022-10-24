import { Header } from "../../components/header/header";
import { ProfileAvatar } from "../../components/profile-avatar/profile-avatar";
import { ProfileForm } from "../../components/profile-form/profile-form";

export interface IProfilePageProps {
  children: {
    profileAvatar: ProfileAvatar;
    viewProfileForm: ProfileForm;
    header: Header;
  };
}
