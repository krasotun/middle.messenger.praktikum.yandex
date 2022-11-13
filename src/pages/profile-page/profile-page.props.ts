import { Header } from "../../components/header/header";
import { ProfileAvatar } from "../../components/profile-avatar/profile-avatar";
import { ProfileData } from "../../components/profile-data/profile-data";
import { ProfileLinks } from "../../components/profile-links/profile-links";

export interface IProfilePageProps {
  children: {
    profileAvatar: ProfileAvatar;
    profileData: ProfileData;
    header: Header;
    profileLinks: ProfileLinks;
  };
}
