import { SendMessageForm } from "../send-message-form/send-message-form";
export interface IChatWindowProps {
  activeChat: number;
  children: {
    sendMessageForm: SendMessageForm;
  };
}
