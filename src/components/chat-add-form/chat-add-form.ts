import { Block } from "../../core/block";
import { IChatAddFormProps } from "./chat-add-form.props";
import template from "./chat-add-form.template";

export class ChatAddForm extends Block {
  constructor({ children, onSubmit }: IChatAddFormProps) {
    super({
      children,
      events: {
        submit: onSubmit,
      },
    });
  }
  render(): string {
    return this.compile(template);
  }
}
