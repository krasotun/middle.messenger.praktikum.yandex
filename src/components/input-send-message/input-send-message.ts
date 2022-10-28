import { Block } from "../../core/block";
import { IInputSendMessageProps } from "./input-send-message.props";
import { render as compileTemplate } from "pug";
import template from "./input-send-message.template";

export class InputSendMessage extends Block {
  constructor({ onInput, onFocus, onBlur }: IInputSendMessageProps) {
    super({
      events: {
        input: onInput,
        focus: onFocus,
        blur: onBlur,
      },
    });
  }
  render(): string {
    return compileTemplate(template);
  }
}
