import { Block } from "../../core/block";
import { IChatWindowProps } from "./chat-window.props";
import { render as compileTemplate } from "pug";
import template from "./chat-window.template";
export class ChatWindow extends Block {
  constructor(props: IChatWindowProps) {
    super(props);
  }
  render(): string {
    const { sendMessageForm, activeChat } = this.props;
    return compileTemplate(template, {
      sendMessageForm,
      activeChat,
    });
  }
}
