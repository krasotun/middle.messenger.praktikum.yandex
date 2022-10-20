import { Block } from "../../core/block";
import { render as renderTemplate } from "pug";
import template from "./header.template";
import { IHeaderProps } from "./types";

export class Header extends Block {
  constructor({ title }: IHeaderProps) {
    super({ title });
  }
  render() {
    return renderTemplate(template, {
      title: this.props.title,
    });
  }
}
