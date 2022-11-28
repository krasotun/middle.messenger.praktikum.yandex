import { Block } from "../../core/block";
import IChatPageProps from "./chat-page.props";
import template from "./chat-page.template";

export class ChatPage extends Block {
  constructor({ children }: IChatPageProps) {
    super({ children });
  }
  render(): string {
    const { header } = this.props;
    return this.compile(template, {
      header,
    });
  }
}
