import { ChatAddForm } from "../../components/chat-add-form/chat-add-form";
import { ChatWindow } from "../../components/chat-window/chat-window";
import { ChatsList } from "../../components/chats-list/chats-list";
import { Header } from "../../components/header/header";

export default interface IChatPageProps {
  children: {
    header: Header;
    chatAddForm: ChatAddForm;
    chatsList: ChatsList;
    chatWindow: ChatWindow;
  };
}
