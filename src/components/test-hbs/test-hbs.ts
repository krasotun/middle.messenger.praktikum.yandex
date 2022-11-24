import { compile as compileTemplate } from "handlebars";
import template from "./test-hbs.template";
import { Block } from "../../core/block";
export class TextHbs extends Block {
  render(): string {
    const rendered = compileTemplate(template);
    const renderedTemplate = rendered({ title: "Заголовок" });
    return renderedTemplate;
  }
}
