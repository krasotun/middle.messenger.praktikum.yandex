import { Block } from "../../core/block";
import { IChangePasswordProps } from "./change-password.-page.props";
import { render as compileTemplate } from "pug";
import template from "./change-password-page.template";
export class ChangePasswordPage extends Block {
  constructor({ children }: IChangePasswordProps) {
    super({ children });
  }
  render(): string {
    const { header, changePasswordProfileForm } = this.props;
    return compileTemplate(template, {
      header,
      changePasswordProfileForm,
    });
  }
}
