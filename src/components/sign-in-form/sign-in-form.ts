import { render as compileTemplate } from "pug";
import { Block } from "../../core/block";
import { ISignInFormProps } from "./sign-in-form.props";
import template from "./sign-in-form.template";

export class SignInForm extends Block {
  constructor({ formTitle, linkHref, linkText, children }: ISignInFormProps) {
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
