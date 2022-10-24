import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import { ISignUpPageProps } from "./sign-up-page.props";
import template from "./sign-up-page.template";
export class SignUpPage extends Block {
  constructor({ children }: ISignUpPageProps) {
    super({ children });
  }
  render(): string {
    const { header, signUpForm } = this.props;
    return compileTemplate(template, {
      header,
      signUpForm,
    });
  }
}
