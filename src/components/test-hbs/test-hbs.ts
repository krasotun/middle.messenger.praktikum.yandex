import template from "./test-hbs.template";
import { Block } from "../../core/block";
import { ITestHbsProps } from "./test-hbs.props";
export class TextHbs extends Block {
  constructor({ title, list, children }: ITestHbsProps) {
    super({
      title,
      list,
      children,
    });
  }
  render() {
    const { title, list, children } = this.props;
    return this.compile(template, { title, list, children });
  }
}
