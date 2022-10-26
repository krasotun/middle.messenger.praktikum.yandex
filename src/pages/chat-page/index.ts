import { Header } from "../../components/header/header";
import { ChatPage } from "./chat-page";
const header = new Header();
export const chatPage = new ChatPage({
  children: {
    header,
  },
});
