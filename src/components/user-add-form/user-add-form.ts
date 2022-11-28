import { Block } from "../../core/block";
import { IUserAddFormProps } from "./user-add-form.props";
import template from "./user-add-form.template";

export class UserAddForm extends Block {
  constructor({ children, onSubmit }: IUserAddFormProps) {
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
