import { Block } from "../../core/block";
import { IButtonProps } from "./button.props";
import template from "./button.template";

export class Button extends Block {
  constructor(props: IButtonProps) {
    super(props);
  }
  render() {
    const { buttonText, className, buttonType } = this.props;
    return this.compile(template, {
      buttonText,
      className,
      buttonType,
    });
  }
}
