import { compile as compileTemplate } from "handlebars";
import template from "./test-hbs.template";
import { Block } from "../../core/block";
export class TextHbs extends Block {
  render(): string {
    const rendered = compileTemplate(template, {
      data: {
        title: "Заголовок",
      },
    });
    const renderedTemplate = rendered(template);
    return renderedTemplate;
  }
}
