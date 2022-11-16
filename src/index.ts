import { changeAvatarForm } from "./components/change-avatar-form/";
import { changePasswordForm } from "./components/change-password-form/";
import { ChatMessage } from "./components/chat-message/chat-message";
import { chatSearchForm } from "./components/chat-search-form";
import { editProfileForm } from "./components/edit-profile-form/edit-profile-form";
import { Header } from "./components/header/header";
import { ProfileLinks } from "./components/profile-links/profile-links";
import { sendMessageForm } from "./components/send-message-form";
import { profileData } from "./components/profile-data/";
import { ServicePage } from "./components/service-page/service-page";
import { signInForm } from "./components/sign-in-form/";
import { signUpForm } from "./components/sign-up-form/";
import { SingleChat } from "./components/single-chat/single-chat";
import { PATHS } from "./core/constants";
import router from "./core/router";
import { ChangePasswordPage } from "./pages/change-password-page/change-password-page";
import { ChatPage } from "./pages/chat-page/chat-page";
import { EditProfilePage } from "./pages/edit-profile-page/edit-profile-page";
import { MainPage } from "./pages/main-page/main-page";
import { ProfilePage } from "./pages/profile-page/profile-page";
import { SignUpPage } from "./pages/sign-up-page/sign-up-page";

const header = new Header();
const profileLinks = new ProfileLinks({
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
    {
      link: "/",
      text: "Выход",
    },
  ],
});
const singleChat = new SingleChat({
  avatarLink:
    "https://avatarko.ru/img/kartinka/33/muzhchina_kapyushon_33779.jpg",
  senderName: "Krasotun",
  messageText: "Привет, это сообщение от Красотуна",
  messageTime: "18:25",
  unreadMessages: "3",
});
const chatMessage = new ChatMessage({
  date: "11:01",
  text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.",
});

document.addEventListener("DOMContentLoaded", () => {
  router.use(PATHS.MAINPAGE, MainPage, {
    children: {
      header,
      signInForm,
    },
  });
  router.use(PATHS.SIGNUPPAGE, SignUpPage, {
    children: {
      header,
      signUpForm,
    },
  });
  router.use(PATHS.PROFILEPAGE, ProfilePage, {
    children: {
      changeAvatarForm,
      header,
      profileLinks,
      profileData,
    },
  });
  router.use(PATHS.EDITPROFILEPAGE, EditProfilePage, {
    children: {
      header,
      editProfileForm,
    },
  });
  router.use(PATHS.CHANGEPASSWORDPAGE, ChangePasswordPage, {
    children: {
      header,
      changePasswordForm,
    },
  });
  router.use(PATHS.CHATPAGE, ChatPage, {
    children: {
      header,
      chatSearchForm,
      singleChat,
      chatMessage,
      sendMessageForm,
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
});
