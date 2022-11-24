import { compile as compileTemplate } from "handlebars";
import template from "./test-hbs.template";
import { Block } from "../../core/block";
import { ITestHbsProps } from "./test-hbs.props";
export class TextHbs extends Block {
  constructor({ children, title }: ITestHbsProps) {
    super({
      children,
      title,
    });
  }
  render() {
    const { title } = this.props;
    return compileTemplate(template)({ title });
  }
}
