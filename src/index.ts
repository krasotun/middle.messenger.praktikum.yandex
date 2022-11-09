import { Header } from "./components/header/header";
import { ServicePage } from "./components/service-page/service-page";
import { Router } from "./core/router";
import { MainPage } from "./pages/main-page/main-page";
import { signInForm } from "./components/sign-in-form/";
import { signUpForm } from "./components/sign-up-form/";
import { viewProfileForm } from "./components/view-profile-form/view-profile-form";
import { editProfileForm } from "./components/edit-profile-form/edit-profile-form";
import { chatSearchForm } from "./components/chat-search-form";
import { sendMessageForm } from "./components/send-message-form";
import { changePasswordForm } from "./components/change-password-form/";
import { SignUpPage } from "./pages/sign-up-page/sign-up-page";
import { ProfileAvatar } from "./components/profile-avatar/profile-avatar";
import { ProfileLinks } from "./components/profile-links/profile-links";
import { ProfilePage } from "./pages/profile-page/profile-page";
import { EditProfilePage } from "./pages/edit-profile-page/edit-profile-page";
import { ChangePasswordPage } from "./pages/change-password-page/change-password-page";
import { SingleChat } from "./components/single-chat/single-chat";
import { ChatMessage } from "./components/chat-message/chat-message";
import { ChatPage } from "./pages/chat-page/chat-page";

const header = new Header();
const profileAvatar = new ProfileAvatar({
  link: "https://avatarko.ru/img/kartinka/33/muzhchina_kapyushon_33779.jpg",
  name: "Krasotun",
});
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

const router = new Router();
document.addEventListener("DOMContentLoaded", () => {
  router.use("/", MainPage, {
    children: {
      header,
      signInForm,
    },
  });
  router.use("/sign-up", SignUpPage, {
    children: {
      header,
      signUpForm,
    },
  });
  router.use("/profile", ProfilePage, {
    children: {
      profileAvatar,
      viewProfileForm,
      header,
      profileLinks,
    },
  });
  router.use("/edit-profile", EditProfilePage, {
    children: {
      header,
      editProfileForm,
    },
  });
  router.use("/change-password", ChangePasswordPage, {
    children: {
      header,
      changePasswordForm,
    },
  });
  router.use("/chat", ChatPage, {
    children: {
      header,
      chatSearchForm,
      singleChat,
      chatMessage,
      sendMessageForm,
    },
  });

  router.use("/404", ServicePage, {
    errorCode: "404",
    errorText: "Страница не найдена",
  });
  router.use("/500", ServicePage, {
    errorCode: "500",
    errorText: "Ошибка сервера",
  });
  router.start();
});
