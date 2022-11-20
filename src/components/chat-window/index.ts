import { ChatWindow } from "./chat-window";
import { sendMessageForm } from "../../components/send-message-form";
import { userAddForm } from "../../components/user-add-form";
import { userRemoveForm } from "../../components/user-remove-form";
const activeChat = 0;
export const chatWindow = new ChatWindow({
  activeChat,
  children: {
    sendMessageForm,
    userAddForm,
    userRemoveForm,
  },
});