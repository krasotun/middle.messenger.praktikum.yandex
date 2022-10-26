import { ChatSearchForm } from "../../components/chat-search-form/chat-search-form";
import { Header } from "../../components/header/header";
import { SingleChat } from "../../components/single-chat/single-chat";

export default interface IChatPageProps {
  children: {
    header: Header;
    chatSearchForm: ChatSearchForm;
    singleChat: SingleChat;
  };
}
