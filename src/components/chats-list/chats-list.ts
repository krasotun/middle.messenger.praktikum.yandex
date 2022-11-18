import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import { IChatsListProps } from "./chats-list.props";
import template from "./chats-list.template";

export class ChatsList extends Block {
  constructor(props: IChatsListProps) {
    super(props);
  }
  render(): string {
    const { chats } = this.props;
    return compileTemplate(template, {
      chats,
    });
  }
  componentRendered(): void {
    const element = this.element;
    element.querySelectorAll(".single-chat__container").forEach((element) => {
      element.classList.add("test");
    });
  }
}
