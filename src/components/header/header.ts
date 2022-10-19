import { Block } from "../../core/block/block";
import { render as renderTemplate } from "pug";
import template from "./header.template";

export class Header extends Block {
  render() {
    const returnedTemplate = renderTemplate(template);
    return returnedTemplate;
  }
}
