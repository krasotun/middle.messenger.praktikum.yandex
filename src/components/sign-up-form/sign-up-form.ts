import { Block } from "../../core/block";
import { ISignUpFormProps } from "./sign-up-form.props";
import template from "./sign-up-form.template";

export class SignUpForm extends Block {
  constructor({
    formTitle,
    linkHref,
    linkText,
    children,
    onSubmit,
  }: ISignUpFormProps) {
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
