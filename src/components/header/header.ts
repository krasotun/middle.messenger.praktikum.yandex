import { render as compileTemplate } from "pug";
import { Block } from "../../core/block";
import template from "./header.template";

export class Header extends Block {
  render() {
    return compileTemplate(template);
  }
}
