import { Block } from "../../core/block";
import { ISendMessageFormProps } from "./send-message-form.props";
import template from "./send-message-form.template";
export class SendMessageForm extends Block {
  constructor({ children, onSubmit }: ISendMessageFormProps) {
    super({
      children,
      events: {
        submit: onSubmit,
      },
    });
  }
  render() {
    return this.compile(template);
  }
}
