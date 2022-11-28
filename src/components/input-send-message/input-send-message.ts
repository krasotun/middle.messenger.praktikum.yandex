import { Block } from "../../core/block";
import { IInputSendMessageProps } from "./input-send-message.props";
import template from "./input-send-message.template";

export class InputSendMessage extends Block {
  constructor({ onFocus, onBlur }: IInputSendMessageProps) {
    super({
      events: {
        focus: onFocus,
        blur: onBlur,
      },
    });
  }
  render(): string {
    return this.compile(template);
  }
}
