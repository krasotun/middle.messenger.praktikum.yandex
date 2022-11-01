import { Block } from "../../core/block";
import { IButtonProps } from "./button.props";
import { render as compileTemplate } from "pug";
import template from "./button.template";

export class Button extends Block {
  constructor(props: IButtonProps) {
    super(props);
  }
  render() {
    const { buttonText, className, buttonType } = this.props;
    return compileTemplate(template, {
      buttonText,
      className,
      buttonType,
    });
  }
}
