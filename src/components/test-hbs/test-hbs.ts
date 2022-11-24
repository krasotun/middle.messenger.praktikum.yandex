import { compile as compileTemplate } from "handlebars";
import template from "./test-hbs.template";
import { Block } from "../../core/block";
import { ITestHbsProps } from "./test-hbs.props";
export class TextHbs extends Block {
  constructor({ children, title, list }: ITestHbsProps) {
    super({
      children,
      title,
      list,
    });
  }
  render() {
    const { title, list } = this.props;
    return compileTemplate(template)({ title, list });
  }
}
