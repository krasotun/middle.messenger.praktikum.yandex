import { ChatWindow } from "./chat-window";
import { sendMessageForm } from "../../components/send-message-form";
import { userAddForm } from "../../components/user-add-form";
import { userRemoveForm } from "../../components/user-remove-form";
export const chatWindow = new ChatWindow({
  activeChat: 0,
  messageList: [
    {
      chat_id: 1,
      content: "Content from template",
      file: null,
      id: 111,
      is_read: true,
      time: "Time from store",
      type: "Type from store",
      user_id: "1111",
      isMine: false,
    },
  ],
  children: {
    sendMessageForm,
    userAddForm,
    userRemoveForm,
  },
});
