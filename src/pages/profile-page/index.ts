import { Header } from "../../components/header/header";
import { ProfilePage } from "./profile-page";
import { viewProfileForm } from "../../components/view-profile-form/view-profile-form";
import { ProfileAvatar } from "../../components/profile-avatar/profile-avatar";
import { ProfileLinks } from "../../components/profile-links/profile-links";

const header = new Header();
const profileAvatar = new ProfileAvatar({
  link: "https://avatarko.ru/img/kartinka/33/muzhchina_kapyushon_33779.jpg",
  name: "Krasotun",
});
const profileLinks = new ProfileLinks({
  linkList: [
    {
      link: "edit-profile.pug",
      text: "Изменить данные",
    },
    {
      link: "change-password.pug",
      text: "Изменить пароль",
    },
    {
      link: "chat.pug",
      text: "Вернуться в чат",
    },
    {
      link: "/",
      text: "Выход",
    },
  ],
});

export const profilePage = new ProfilePage({
  children: {
    profileAvatar,
    viewProfileForm,
    header,
    profileLinks,
  },
});
