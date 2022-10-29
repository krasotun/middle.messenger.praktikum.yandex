import { render as compileTemplate } from "pug";
import { Block } from "../../core/block";
import { ISignFormProps } from "./sign-form.props";
import template from "./sign-form.template";

export class SignForm extends Block {
  constructor({ formTitle, linkHref, linkText, children }: ISignFormProps) {
    super({
      formTitle,
      linkHref,
      linkText,
      children,
    });
    console.log(this.props.children);
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
