import { ChatWindow } from "./chat-window";
import { sendMessageForm } from "../../components/send-message-form";
import { userAddForm } from "../../components/user-add-form";
const activeChat = 1;
export const chatWindow = new ChatWindow({
  activeChat,
  children: {
    sendMessageForm,
    userAddForm,
  },
});
