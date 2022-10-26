import { Block } from "../../core/block";
import IChatPageProps from "./chat-page.props";
import { render as compileTemplate } from "pug";
import template from "./chat-page.template";

export class ChatPage extends Block {
  constructor({ children }: IChatPageProps) {
    super({ children });
  }
  render(): string {
    const { header } = this.props;
    return compileTemplate(template, {
      header,
    });
  }
}
