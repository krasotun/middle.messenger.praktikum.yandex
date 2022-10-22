import { render as compileTemplate } from "pug";
import template from "./sign-form.template";
import { Block } from "../../core/block";
import { ISignFormProps } from "./sign-form-props";

export class SignForn extends Block {
  constructor({ formTitle, inputList, linkHref, linkText }: ISignFormProps) {
    super({
      formTitle,
      inputList,
      linkHref,
      linkText,
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
