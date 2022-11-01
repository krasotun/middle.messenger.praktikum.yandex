import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import template from "./single-chat.template";
import { ISingleChatProps } from "./single-chat.props";

export class SingleChat extends Block {
  constructor(props: ISingleChatProps) {
    super(props);
  }
  render(): string {
    const { avatarLink, senderName, messageText, messageTime, unreadMessages } =
      this.props;
    return compileTemplate(template, {
      avatarLink,
      senderName,
      messageText,
      messageTime,
      unreadMessages,
    });
  }
}
