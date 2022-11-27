import { Block } from "../../core/block";
import { IChangePasswordProps } from "./change-password.-page.props";
import template from "./change-password-page.template";
export class ChangePasswordPage extends Block {
  constructor({ children }: IChangePasswordProps) {
    super({ children });
  }
  render() {
    return this.compile(template);
  }
}
