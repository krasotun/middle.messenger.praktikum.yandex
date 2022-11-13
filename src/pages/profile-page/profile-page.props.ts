import { Header } from "../../components/header/header";
import { ProfileAvatar } from "../../components/profile-avatar/profile-avatar";
import { ProfileData } from "../../components/profile-data/profile-data";
import { ProfileForm } from "../../components/profile-form/profile-form";
import { ProfileLinks } from "../../components/profile-links/profile-links";

export interface IProfilePageProps {
  children: {
    profileAvatar: ProfileAvatar;
    viewProfileForm: ProfileForm;
    profileData: ProfileData;
    header: Header;
    profileLinks: ProfileLinks;
  };
}
