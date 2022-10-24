import { mainPage } from "../pages/main-page";
import { signUpPage } from "../pages/sign-up-page";
import { profilePage } from "../pages/profile-page";
export const pageToRender = () => {
  const path = document.location.pathname;
  switch (path) {
    case "/":
      return mainPage;
    case "/sign-up":
      return signUpPage;
    case "/profile":
      return profilePage;
    default:
      return mainPage;
  }
};
