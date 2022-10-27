import { ChatMessage } from "../../components/chat-message/chat-message";
import { ChatSearchForm } from "../../components/chat-search-form/chat-search-form";
import { Header } from "../../components/header/header";
import { SendMessageForm } from "../../components/send-message-form/send-message-form";
import { SingleChat } from "../../components/single-chat/single-chat";

export default interface IChatPageProps {
  children: {
    header: Header;
    chatSearchForm: ChatSearchForm;
    singleChat: SingleChat;
    chatMessage: ChatMessage;
    sendMessageForm: SendMessageForm;
  };
}
