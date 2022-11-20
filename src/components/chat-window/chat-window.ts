import { Block } from "../../core/block";
import { IChatWindowProps } from "./chat-window.props";
import { render as compileTemplate } from "pug";
import template from "./chat-window.template";
import store, { StoreEvents } from "../../core/store";
export class ChatWindow extends Block {
  constructor(props: IChatWindowProps) {
    super(props);
    store.on(StoreEvents.UPDATE, () => {
      const activeChat = store.getState()?.activeChat;
      if (activeChat) {
        this.setProps({
          activeChat,
        });
      }
    });
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
