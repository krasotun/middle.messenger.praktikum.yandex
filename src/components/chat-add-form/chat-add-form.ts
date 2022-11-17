import { Block } from "../../core/block";
import { IChatAddFormProps } from "./chat-add-form.props";
import template from "./chat-add-form.template";
import { render as compileTemplate } from "pug";

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
    return compileTemplate(template);
  }
}
