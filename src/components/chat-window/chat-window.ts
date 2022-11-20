import { Block } from "../../core/block";
import { IChatWindowProps } from "./chat-window.props";
import { render as compileTemplate } from "pug";
import template from "./chat-window.template";
import store, { StoreEvents } from "../../core/store";
import chatController from "../../controllers/chat-controller";
export class ChatWindow extends Block {
  constructor(props: IChatWindowProps) {
    super(props);
    store.on(StoreEvents.UPDATE, () => {
      const activeChat = store.getState()?.activeChat;
      this.setProps({ activeChat });
    });
    chatController.getChatToken(activeChat);
  }
  render(): string {
    const { sendMessageForm, activeChat, userAddForm } = this.props;
    return compileTemplate(template, {
      sendMessageForm,
      activeChat,
      userAddForm,
    });
  }
}
