import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import { IMainPageProps } from "./main-page.props";
import template from "./main-page.template";

export class MainPage extends Block {
  constructor({ children }: IMainPageProps) {
    super({ children });
  }
  render(): string {
    const { header, signInForm } = this.props;
    console.log(this.props.children);
    return compileTemplate(template, {
      header,
      signInForm,
    });
  }
}
