import { Block } from "../../core/block";
import { ISendMessageFormProps } from "./send-message-form.props";
import { render as compileTemplate } from "pug";
import template from "./send-message-form.template";
import { formValidator } from "../../core/form-validator";

export class SendMessageForm extends Block {
  constructor({ children, onSubmit }: ISendMessageFormProps) {
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
