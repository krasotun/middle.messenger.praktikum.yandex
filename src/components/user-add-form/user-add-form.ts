import { Block } from "../../core/block";
import { IUserAddFormProps } from "./user-add-form.props";
import template from "./user-add-form.template";
import { render as compileTemplate } from "pug";

export class UserAddForm extends Block {
  constructor({ children, onSubmit }: IUserAddFormProps) {
    super({
      children,
      events: {
        submit: onSubmit,
      },
    });
  }
  render(): string {
    return compileTemplate(template);
  }
}
