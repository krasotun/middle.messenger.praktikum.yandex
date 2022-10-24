import { render as compileTemplate } from "pug";
import { Block } from "../../core/block";
import { ISignFormProps } from "./sign-form.props";
import template from "./sign-form.template";

export class SignForm extends Block {
  constructor({
    formTitle,
    inputList,
    linkHref,
    linkText,
    children,
  }: ISignFormProps) {
    super({
      formTitle,
      inputList,
      linkHref,
      linkText,
      children,
    });
  }
  render(): string {
    const { formTitle, inputList, linkHref, linkText } = this.props;
    return compileTemplate(template, {
      formTitle,
      inputList,
      linkHref,
      linkText,
    });
  }
}
