import { ChatMessage } from "../../components/chat-message/chat-message";
import { chatSearchForm } from "../../components/chat-search-form";
import { chatAddForm } from "../../components/chat-add-form";
import { sendMessageForm } from "../../components/send-message-form";
import { header } from "../../components/header/";
import { SingleChat } from "../../components/single-chat/single-chat";
import { ChatPage } from "./chat-page";

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

export const chatPage = new ChatPage({
  children: {
    chatAddForm,
    header,
    chatSearchForm,
    singleChat,
    chatMessage,
    sendMessageForm,
  },
});
