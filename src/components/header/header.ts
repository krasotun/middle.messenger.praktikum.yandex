import { Block } from "../../core/block";
// import { render as renderTemplate } from "pug";
// import template from "./header.template";
import { IHeaderProps } from "./header.props";

export class Header extends Block {
  constructor({ title }: IHeaderProps) {
    super({ title });
  }
  render() {
    return `<h1>${this.props.title}</h1>`;
  }
}
