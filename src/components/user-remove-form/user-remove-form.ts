import { Block } from "../../core/block";
import { IUserRemoveFormProps } from "./user-remove-form.props";
import template from "./user-remove-form.template";

export class UserRemoveForm extends Block {
  constructor({ children, onSubmit }: IUserRemoveFormProps) {
    super({
      children,
      events: {
        submit: onSubmit,
      },
    });
  }
  render(): string {
    return this.compile(template);
  }
}
