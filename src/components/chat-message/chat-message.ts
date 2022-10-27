import { Block } from "../../core/block";
import { IChatMessageProps } from "./chat-message.props";
import { render as compileTemplate } from "pug";
import template from "./chat-message.template";
export class ChatMessage extends Block {
  constructor({ text, date }: IChatMessageProps) {
    super({ text, date });
  }

  render(): string {
    const { text, date } = this.props;
    return compileTemplate(template, {
      text,
      date,
    });
  }
}
