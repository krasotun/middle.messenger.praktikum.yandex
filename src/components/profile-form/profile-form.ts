import { Block } from "../../core/block";
import template from "./profile-form.template";
import { render as compileTemplate } from "pug";
import { IProfileFormProps } from "./profile-form.props";

export class ProfileForm extends Block {
  constructor({ inputList, children }: IProfileFormProps) {
    super({
      inputList,
      children,
    });
  }
  render(): string {
    const { inputList } = this.props;
    return compileTemplate(template, {
      inputList,
    });
  }
}
