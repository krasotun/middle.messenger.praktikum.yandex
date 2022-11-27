import { Block } from "../../core/block";
import template from "./change-password-form.template";
import { IChangePasswordFormProps } from "./change-password-form.props";

export class ChangePasswordForm extends Block {
  constructor({ children, onSubmit }: IChangePasswordFormProps) {
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
