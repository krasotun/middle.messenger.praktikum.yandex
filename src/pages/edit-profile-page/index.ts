import { Header } from "../../components/header/header";
import { editProfileForm } from "../../components/edit-profile-form/edit-profile-form";
import { EditProfilePage } from "./edit-profile-page";

const header = new Header();
export const editProfilePage = new EditProfilePage({
  children: {
    header,
    editProfileForm,
  },
});
