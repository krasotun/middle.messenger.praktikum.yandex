import { Block } from "../../core/block";
import { ISignInFormProps } from "./sign-in-form.props";
import template from "./sign-in-form.template";

export class SignInForm extends Block {
  constructor({
    formTitle,
    linkHref,
    linkText,
    children,
    onSubmit,
  }: ISignInFormProps) {
    super({
      formTitle,
      linkHref,
      linkText,
      children,
      events: {
        submit: onSubmit,
      },
    });
  }
  render(): string {
    const { formTitle, linkHref, linkText } = this.props;
    return this.compile(template, {
      formTitle,
      linkHref,
      linkText,
    });
  }
}
