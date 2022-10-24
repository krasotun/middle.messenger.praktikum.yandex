import { mainPage } from "../pages/main-page";
import { signUpPage } from "../pages/sign-up-page";
import { profilePage } from "../pages/profile-page";
import { editProfilePage } from "../pages/edit-profile-page";
import { changePasswordPage } from "../pages/change-password-page";
export const pageToRender = () => {
  const path = document.location.pathname;
  switch (path) {
    case "/":
      return mainPage;
    case "/sign-up":
      return signUpPage;
    case "/profile":
      return profilePage;
    case "/edit-profile":
      return editProfilePage;
    case "/change-password":
      return changePasswordPage;
    default:
      return mainPage;
  }
};
