import { SendMessageForm } from "../send-message-form/send-message-form";
import { UserAddForm } from "../user-add-form/user-add-form";
import { UserRemoveForm } from "../user-remove-form/user-remove-form";
export interface IChatWindowProps {
  activeChat: number;
  children: {
    sendMessageForm: SendMessageForm;
    userAddForm: UserAddForm;
    userRemoveForm: UserRemoveForm;
  };
}
