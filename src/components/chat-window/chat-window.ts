import { Block } from "../../core/block";
import { IChatWindowProps } from "./chat-window.props";
import { render as compileTemplate } from "pug";
import template from "./chat-window.template";
import store, { StoreEvents } from "../../core/store";
import chatApi from "../../api/chat-api";
export class ChatWindow extends Block {
  constructor(props: IChatWindowProps) {
    super(props);
    store.on(StoreEvents.UPDATE, () => {
      const activeChat = store.getState()?.activeChat;
      if (activeChat !== 0) {
        this.setProps({ activeChat });
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
  componentRendered(): void {
    const activeChat = store.getState()?.activeChat;
    if (activeChat !== 0) {
      chatApi.getChatToken(activeChat).then((res) => {
        const chatToken = res.json().token;
        console.log(chatToken);
        console.log(activeChat);
      });
    }
  }
}
