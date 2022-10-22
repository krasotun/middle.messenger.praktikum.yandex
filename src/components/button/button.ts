import { Block } from "../../core/block";
import { IButtonProps } from "./button.props";
import { render as compileTemplate } from "pug";
import template from "./button.template";

export class Button extends Block {
  constructor({ buttonText, className }: IButtonProps) {
    super({ buttonText, className });
  }
  render() {
    const { buttonText, className } = this.props;
    return compileTemplate(template, {
      buttonText,
      className,
    });
  }
}
