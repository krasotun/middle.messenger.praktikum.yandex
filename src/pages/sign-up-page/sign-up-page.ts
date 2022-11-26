import { Block } from "../../core/block";
import { ISignUpPageProps } from "./sign-up-page.props";
import template from "./sign-up-page.template";
export class SignUpPage extends Block {
  constructor({ children }: ISignUpPageProps) {
    super({ children });
  }
  render(): string {
    const { header, signUpForm } = this.props;
    return this.compile(template, {
      header,
      signUpForm,
    });
  }
}
