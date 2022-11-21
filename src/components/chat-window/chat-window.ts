import { Block } from "../../core/block";
import { IChatWindowProps } from "./chat-window.props";
import { render as compileTemplate } from "pug";
import template from "./chat-window.template";
import store, { StoreEvents } from "../../core/store";
import chatApi from "../../api/chat-api";
import messagesController from "../../controllers/messages-controller";
export class ChatWindow extends Block {
  constructor(props: IChatWindowProps) {
    super(props);
    store.on(StoreEvents.UPDATE, () => {
      const activeChat = store.getState()?.activeChat;
      if (activeChat !== 0) {
        this.setProps({ activeChat });
      }
    });
    store.on(StoreEvents.UPDATE, () => {
      const messageList = store.getState()?.messageList;
      const activeChat = store.getState()?.activeChat;
      if (activeChat !== 0) {
        this.setProps({ messageList });
      }
    });
  }
  render(): string {
    const { sendMessageForm, activeChat, userAddForm, messageList } =
      this.props;
    return compileTemplate(template, {
      sendMessageForm,
      activeChat,
      userAddForm,
      messageList,
    });
  }
  componentRendered(): void {
    const activeChat = store.getState()?.activeChat;
    if (activeChat !== 0) {
      messagesController.connect();
    }
  }
}
