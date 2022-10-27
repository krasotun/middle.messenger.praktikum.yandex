import { ChatMessage } from "../../components/chat-message/chat-message";
import { ChatSearchForm } from "../../components/chat-search-form/chat-search-form";
import { Header } from "../../components/header/header";
import { SingleChat } from "../../components/single-chat/single-chat";
import { ChatPage } from "./chat-page";
import { Button } from "../../components/button/button";
import { SendMessageForm } from "../../components/send-message-form/send-message-form";

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
const chatMessage = new ChatMessage({
  date: "11:01",
  text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.",
});
const attachButton = new Button({
  buttonText: "Прикрепить файл",
  className: "send-message-form__attach-button",
});
const submitButton = new Button({
  buttonText: "Отправить",
  className: "send-message-form__submit-button",
});
const sendMessageForm = new SendMessageForm({
  children: {
    attachButton,
    submitButton,
  },
});

export const chatPage = new ChatPage({
  children: {
    header,
    chatSearchForm,
    singleChat,
    chatMessage,
    sendMessageForm,
  },
});
