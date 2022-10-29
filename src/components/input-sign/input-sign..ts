import { Block } from "../../core/block";
import { IInputSignProps } from "./input-sign.props";
import { render as compileTemplate } from "pug";
import template from "./input-sign.template";

export class InputSign extends Block {
  constructor({
    labelFor,
    label,
    type,
    required,
    id,
    name,
    placeholder,
    onFocus,
    onBlur,
  }: IInputSignProps) {
    super({
      labelFor,
      label,
      type,
      required,
      id,
      name,
      placeholder,
      events: {
        focus: onFocus,
        blur: onBlur,
      },
    });
  }
  render(): string {
    const { labelFor, label, type, required, id, name, placeholder } =
      this.props;
    return compileTemplate(template, {
      labelFor,
      label,
      type,
      required,
      id,
      name,
      placeholder,
    });
  }
}
