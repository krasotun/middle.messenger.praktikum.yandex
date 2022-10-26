import { mainPage } from "../pages/main-page";
import { signUpPage } from "../pages/sign-up-page";
import { profilePage } from "../pages/profile-page";
import { editProfilePage } from "../pages/edit-profile-page";
import { changePasswordPage } from "../pages/change-password-page";
import { notFoundPage } from "../pages/404-page";
import { internalErrorPage } from "../pages/500-page";
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
    case "/404":
      return notFoundPage;
    case "/500":
      return internalErrorPage;
    default:
      return mainPage;
  }
};
