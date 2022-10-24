import { mainPage } from "../pages/main-page";
import { signUpPage } from "../pages/sign-up-page";
export const pageToRender = () => {
  const path = document.location.pathname;
  switch (path) {
    case "/":
      return mainPage;
    case "/sign-up":
      return signUpPage;
    default:
      return mainPage;
  }
};
