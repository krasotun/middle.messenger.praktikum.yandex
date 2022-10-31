import { Block } from "../../core/block";
import template from "./profile-form.template";
import { render as compileTemplate } from "pug";
import { IProfileFormProps } from "./profile-form.props";

export class ProfileForm extends Block {
  constructor({ children, onSubmit }: IProfileFormProps) {
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
