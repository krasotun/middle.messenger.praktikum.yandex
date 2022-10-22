import { render as compileTemplate } from "pug";
import { Block } from "../../core/block";
import { ISignFormProps } from "./sign-form-props";
import template from "./sign-form.template";

export class SignForn extends Block {
  constructor({
    formTitle,
    inputList,
    linkHref,
    linkText,
    submitButton,
  }: ISignFormProps) {
    super({
      formTitle,
      inputList,
      linkHref,
      linkText,
      submitButton,
    });
  }
  render(): string {
    const { formTitle, inputList, linkHref, linkText, submitButton } =
      this.props;
    console.log(submitButton);
    return compileTemplate(template, {
      formTitle,
      inputList,
      linkHref,
      linkText,
    });
  }
}
