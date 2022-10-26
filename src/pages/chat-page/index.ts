import { ChatSearchForm } from "../../components/chat-search-form/chat-search-form";
import { Header } from "../../components/header/header";
import { SingleChat } from "../../components/single-chat/single-chat";
import { ChatPage } from "./chat-page";
const header = new Header();
const chatSearchForm = new ChatSearchForm();
const singleChat = new SingleChat({
  avatarLink:
    "https://avatarko.ru/img/kartinka/33/muzhchina_kapyushon_33779.jpg",
  senderName: "Krasotun",
  messageText: "Привет, это сообщение от Красотуна",
  messageTime: "18:25",
  unreadMessages: "3",
});
export const chatPage = new ChatPage({
  children: {
    header,
    chatSearchForm,
    singleChat,
  },
});
