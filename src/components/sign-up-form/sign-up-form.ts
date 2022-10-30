import { render as compileTemplate } from "pug";
import { Block } from "../../core/block";
import { ISignUpFormProps } from "./sign-up-form.props";
import template from "./sign-up-form.template";

export class SignUpForm extends Block {
  constructor({ formTitle, linkHref, linkText, children }: ISignUpFormProps) {
    super({
      formTitle,
      linkHref,
      linkText,
      children,
    });
  }
  render(): string {
    const { formTitle, linkHref, linkText } = this.props;
    return compileTemplate(template, {
      formTitle,
      linkHref,
      linkText,
    });
  }
}
