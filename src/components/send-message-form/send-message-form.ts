import { Block } from "../../core/block";
import { ISendMessageFormProps } from "./send-message-form.props";
import { render as compileTemplate } from "pug";
import template from "./send-message-form.template";
import { validateForm } from "../../core/form-validator";

export class SendMessageForm extends Block {
  constructor({ children }, onSubmit: ISendMessageFormProps) {
    super({
      children,
      events: {
        submit: onSubmit,
      },
    });
  }
  render(): string {
    const { attachButton, submitButton } = this.props;
    return compileTemplate(template, {
      attachButton,
      submitButton,
    });
  }
  componentRendered(): void {
    validateForm(this.element.firstChild as HTMLFormElement);
  }
}
