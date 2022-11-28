import { changeAvatarForm } from "./components/change-avatar-form/";
import { changePasswordForm } from "./components/change-password-form/";
import { profileForm } from "./components/profile-form";
import { chatAddForm } from "./components/chat-add-form";
import { Header } from "./components/header/header";
import { ProfileLinks } from "./components/profile-links/profile-links";
import { profileData } from "./components/profile-data/";
import { chatWindow } from "./components/chat-window/";
import { ServicePage } from "./pages/service-page/service-page";
import { signInForm } from "./components/sign-in-form/";
import { signUpForm } from "./components/sign-up-form/";
import { chatsList } from "./components/chats-list/";
import { PATHS } from "./core/constants";
import router from "./core/router";
import { ChangePasswordPage } from "./pages/change-password-page/change-password-page";
import { ChatPage } from "./pages/chat-page/chat-page";
import { EditProfilePage } from "./pages/edit-profile-page/edit-profile-page";
import { MainPage } from "./pages/main-page/main-page";
import { ProfilePage } from "./pages/profile-page/profile-page";
import { SignUpPage } from "./pages/sign-up-page/sign-up-page";
import authController from "./controllers/auth-controller";

document.addEventListener("DOMContentLoaded", () => {
  router.use(PATHS.MAINPAGE, MainPage, {
    children: {
      header: new Header(),
      signInForm,
    },
  });
  router.use(PATHS.SIGNUPPAGE, SignUpPage, {
    children: {
      header: new Header(),
      signUpForm,
    },
  });
  router.use(PATHS.PROFILEPAGE, ProfilePage, {
    children: {
      changeAvatarForm,
      header: new Header(),
      profileLinks: new ProfileLinks({
        linkList: [
          {
            link: "/edit-profile",
            text: "Изменить данные",
          },
          {
            link: "/change-password",
            text: "Изменить пароль",
          },
          {
            link: "/chat",
            text: "Вернуться в чат",
          },
        ],
      }),
      profileData,
    },
  });
  router.use(PATHS.EDITPROFILEPAGE, EditProfilePage, {
    children: {
      header: new Header(),
      profileForm,
    },
  });
  router.use(PATHS.CHANGEPASSWORDPAGE, ChangePasswordPage, {
    children: {
      header: new Header(),
      changePasswordForm,
    },
  });
  router.use(PATHS.CHATPAGE, ChatPage, {
    children: {
      header: new Header(),
      chatAddForm,
      chatsList,
      chatWindow,
    },
  });
  router.use(PATHS.NOTFOUNDPAGE, ServicePage, {
    errorCode: "404",
    errorText: "Страница не найдена",
  });
  router.use(PATHS.SERVERERRORPAGE, ServicePage, {
    errorCode: "500",
    errorText: "Ошибка сервера",
  });
  router.start();
  const exitButton = document.querySelector(".profile__link_clickable");
  exitButton?.addEventListener("click", () => {
    authController.logout();
  });
});
