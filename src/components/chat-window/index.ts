import { ChatWindow } from "./chat-window";
import { sendMessageForm } from "../../components/send-message-form";
import { userAddForm } from "../../components/user-add-form";
import { userRemoveForm } from "../../components/user-remove-form";
const activeChat = 0;
const messageList = [
  {
    chat_id: 1,
    content: "Content from template",
    file: null,
    id: 111,
    is_read: true,
    time: "Time from store",
    type: "Type from store",
    user_id: "1111",
  },
  {
    chat_id: 1,
    content: "Content from template",
    file: null,
    id: 111,
    is_read: true,
    time: "Time from store",
    type: "Type from store",
    user_id: "1111",
  },
  {
    chat_id: 1,
    content: "Content from template",
    file: null,
    id: 111,
    is_read: true,
    time: "Time from store",
    type: "Type from store",
    user_id: "1111",
  },
];
export const chatWindow = new ChatWindow({
  activeChat,
  messageList,
  children: {
    sendMessageForm,
    userAddForm,
    userRemoveForm,
  },
});
