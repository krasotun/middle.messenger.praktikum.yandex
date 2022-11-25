import { Block } from "../../core/block";
import { IMainPageProps } from "./main-page.props";
import template from "./main-page.template";

export class MainPage extends Block {
  constructor({ children }: IMainPageProps) {
    super({ children });
  }
  render(): string {
    const { header, signInForm } = this.props;
    return this.compile(template, {
      header,
      signInForm,
    });
  }
}
