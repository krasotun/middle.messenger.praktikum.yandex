import { ChatWindow } from "./chat-window";
import { sendMessageForm } from "../../components/send-message-form";
const activeChat = 1;
export const chatWindow = new ChatWindow({
  activeChat,
  children: {
    sendMessageForm,
  },
});
