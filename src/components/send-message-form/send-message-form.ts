import { Block } from "../../core/block";
import { ISendMessageFormProps } from "./send-message-form.props";
import { render as compileTemplate } from "pug";
import template from "./send-message-form.template";

export class SendMessageForm extends Block {
  constructor({ children }: ISendMessageFormProps) {
    super({ children });
  }
  render(): string {
    console.log("rendered");
    const { attachButton, submitButton } = this.props;
    return compileTemplate(template, {
      attachButton,
      submitButton,
    });
  }
  componentRendered(): void {
    this.element.classList.add("123");
  }
}
