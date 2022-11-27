import { Block } from "../../core/block";
import template from "./input-profile.template";
import { IInputProfileProps } from "./input-profile.props";

export class InputProfile extends Block {
  constructor({
    labelFor,
    label,
    type,
    required,
    disabled,
    id,
    name,
    placeholder,
    onFocus,
    onBlur,
  }: IInputProfileProps) {
    super({
      labelFor,
      label,
      type,
      required,
      disabled,
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
    const { labelFor, label, type, required, disabled, id, name, placeholder } =
      this.props;
    return this.compile(template, {
      labelFor,
      label,
      type,
      required,
      disabled,
      id,
      name,
      placeholder,
    });
  }
}
