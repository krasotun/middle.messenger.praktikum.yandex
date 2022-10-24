import { Header } from "../../components/header/header";
import { ProfileAvatar } from "../../components/profile-avatar/profile-avatar";
import { ProfileForm } from "../../components/profile-form/profile-form";
import { ProfileLinks } from "../../components/profile-links/profile-links";

export interface IProfilePageProps {
  children: {
    profileAvatar: ProfileAvatar;
    viewProfileForm: ProfileForm;
    header: Header;
    profileLinks: ProfileLinks;
  };
}
