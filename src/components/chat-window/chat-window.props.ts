import { SendMessageForm } from "../send-message-form/send-message-form";
import { UserAddForm } from "../user-add-form/user-add-form";
export interface IChatWindowProps {
  activeChat: number;
  children: {
    sendMessageForm: SendMessageForm;
    userAddForm: UserAddForm;
  };
}
