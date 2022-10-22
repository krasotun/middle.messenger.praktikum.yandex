import { Block } from "../../core/block";
import { render as compileTemplate } from "pug";
import template from "./header.template";
import { IHeaderProps } from "./header.props";

export class Header extends Block {
  constructor({ title }: IHeaderProps) {
    super({ title });
  }
  render() {
    const { title } = this.props;
    return compileTemplate(template, {
      title,
    });
  }
}
