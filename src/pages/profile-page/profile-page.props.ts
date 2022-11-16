import { ChangeAvatarForm } from "../../components/change-avatar-form/change-avatar-form";
import { Header } from "../../components/header/header";
import { ProfileData } from "../../components/profile-data/profile-data";
import { ProfileLinks } from "../../components/profile-links/profile-links";

export interface IProfilePageProps {
  children: {
    changeAvatarForm: ChangeAvatarForm;
    profileData: ProfileData;
    header: Header;
    profileLinks: ProfileLinks;
  };
}
