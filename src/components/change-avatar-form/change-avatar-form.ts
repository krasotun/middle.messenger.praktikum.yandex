import { render as compileTemplate } from "pug";
import { Block } from "../../core/block";
import { IChangeAvatarFormProps } from "./change-avatar-form.props";
import template from "./change-avatar-form.template";

export class ChangeAvatarForm extends Block {
  constructor({ onSubmit }: IChangeAvatarFormProps) {
    super({
      events: {
        submit: onSubmit,
      },
    });
  }

  render(): string {
    return compileTemplate(template);
  }
}
