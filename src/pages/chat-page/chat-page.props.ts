import { ChatAddForm } from "../../components/chat-add-form/chat-add-form";
import { ChatMessage } from "../../components/chat-message/chat-message";
import { ChatSearchForm } from "../../components/chat-search-form/chat-search-form";
import { ChatWindow } from "../../components/chat-window/chat-window";
import { ChatsList } from "../../components/chats-list/chats-list";
import { Header } from "../../components/header/header";
import { SendMessageForm } from "../../components/send-message-form/send-message-form";

export default interface IChatPageProps {
  children: {
    header: Header;
    chatAddForm: ChatAddForm;
    chatsList: ChatsList;
    chatWindow: ChatWindow;
  };
}
