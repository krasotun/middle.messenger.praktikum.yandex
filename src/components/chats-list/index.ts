import { ChatsList } from "./chats-list";

const chats = [
  {
    id: 0,
    title: "Title from template",
    avatar: "https://avatarko.ru/img/kartinka/33/muzhchina_kapyushon_33779.jpg",
    unread_count: 0,
    last_message: {
      user: {
        first_name: "First_name from template",
        second_name: "Second_name from template",
        avatar: "Avatar from template",
        email: "Email from template",
        login: "Login from template",
        phone: "Phone from template",
      },
      time: "00:45",
      content: "Content from template",
    },
  },
];

export const chatsList = new ChatsList({ chats });
